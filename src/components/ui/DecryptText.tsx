'use client'

import { useDecryptText } from '@/hooks/useDecryptText'

type DecryptTextProps = {
  text: string
  speed?: number
  delay?: number
  className?: string
  overlay?: boolean
  maskPattern?: string
  maskLength?: number
}

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value))
}

function smootherstep(value: number) {
  const t = clamp01(value)
  return t * t * t * (t * (t * 6 - 15) + 10)
}

function mapRange01(value: number, start: number, end: number) {
  if (end <= start) return value >= end ? 1 : 0
  return clamp01((value - start) / (end - start))
}

function getTextPhase(progress: number) {
  const p = clamp01(progress)

  const endAt = 0.88
  const x = mapRange01(p, 0, endAt)

  return smootherstep(x)
}

function getExtraMaskPhase(progress: number) {
  const p = clamp01(progress)


  if (p <= 0.82) return 0

  if (p <= 0.94) {
    const x = mapRange01(p, 0.82, 0.94)
    return smootherstep(x) * 0.35
  }

  if (p <= 0.985) {
    const x = mapRange01(p, 0.94, 0.985)
    return 0.35 + smootherstep(x) * 0.35
  }

  if (p <= 0.998) {
    const x = mapRange01(p, 0.985, 0.998)
    return 0.7 + Math.pow(x, 8) * 0.18
  }

  const x = mapRange01(p, 0.998, 1)
  return 0.88 + smootherstep(x) * 0.12
}

export default function DecryptText({
  text,
  speed = 20,
  delay = 1500,
  className,
  overlay = false,
  maskPattern = 'X',
  maskLength,
}: DecryptTextProps) {
  const { progress, isDone, fullMask } = useDecryptText(text, {
    speed,
    delay,
    maskPattern,
    maskLength,
  })

  const textPhase = getTextPhase(progress)
  const extraMaskPhase = getExtraMaskPhase(progress)

  const visuallyDone = isDone || progress >= 0.99995

  if (!overlay) {
    return <span className={className}>{visuallyDone ? text : fullMask}</span>
  }

  const coreMask = fullMask.slice(0, text.length)
  const extraMask = fullMask.slice(text.length)

  const textInsetRight = `${100 - textPhase * 100}%`
  const coreMaskInsetLeft = `${textPhase * 100}%`
  const extraMaskInsetRight = `${extraMaskPhase * 100}%`

  return (
    <span
      className={`inline-grid overflow-hidden align-top whitespace-pre ${className ?? ''}`}
    >
      <span
        className="invisible whitespace-pre [grid-area:1/1]"
        aria-hidden="true"
      >
        {fullMask}
      </span>

      <span className="whitespace-pre [grid-area:1/1]">
        <span className="inline-block overflow-hidden align-top">
          <span
            className="inline-block whitespace-pre"
            style={{
              clipPath: `inset(0 ${textInsetRight} 0 0)`,
              willChange: 'clip-path',
            }}
          >
            {text}
          </span>
        </span>
      </span>

      {!visuallyDone && (
        <span aria-hidden="true" className="whitespace-pre [grid-area:1/1]">
          <span className="inline-block overflow-hidden align-top">
            <span
              className="inline-block whitespace-pre"
              style={{
                clipPath: `inset(0 0 0 ${coreMaskInsetLeft})`,
                willChange: 'clip-path',
              }}
            >
              {coreMask}
            </span>
          </span>

          {extraMask.length > 0 && (
            <span className="inline-block overflow-hidden align-top">
              <span
                className="inline-block whitespace-pre"
                style={{
                  clipPath: `inset(0 ${extraMaskInsetRight} 0 0)`,
                  willChange: 'clip-path',
                }}
              >
                {extraMask}
              </span>
            </span>
          )}
        </span>
      )}
    </span>
  )
}
