import { useEffect, useState } from 'react'

function buildMask(length: number, pattern = 'X') {
  const safePattern = pattern.length > 0 ? pattern : 'X'
  return safePattern.repeat(Math.ceil(length / safePattern.length)).slice(0, length)
}

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function easeVeryLateFinish(t: number) {
  const slowStart = 0.7

  if (t <= slowStart) return t

  const tailProgress = (t - slowStart) / (1 - slowStart)
  return slowStart + easeOutExpo(tailProgress) * (1 - slowStart)
}

type UseDecryptTextOptions = {
  speed?: number
  delay?: number
  maskPattern?: string
  maskLength?: number
}

export function useDecryptText(
  text: string,
  {
    speed = 30,
    delay = 500,
    maskPattern = 'X',
    maskLength = text.length,
  }: UseDecryptTextOptions = {}
) {
  const finalMaskLength = Math.max(maskLength, text.length)
  const totalDuration = Math.max(text.length * speed, 300)

  const [progress, setProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {

    let frameId = 0
    let startTimeoutId: ReturnType<typeof setTimeout> | undefined = undefined
    let startTime = 0

    setProgress(0)
    setIsDone(false)

    const animate = (time: number) => {
      if (!startTime) startTime = time

      const elapsed = time - startTime
      const linearProgress = Math.min(elapsed / totalDuration, 1)
      const easedProgress = easeVeryLateFinish(linearProgress)

      setProgress(easedProgress)

      if (linearProgress < 1) {
        frameId = window.requestAnimationFrame(animate)
      } else {
        setIsDone(true)
      }
    }

    startTimeoutId = setTimeout(() => {
      frameId = window.requestAnimationFrame(animate)
    }, delay)

    return () => {
      if (startTimeoutId) clearTimeout(startTimeoutId)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [text, speed, delay, totalDuration])

  return {
    progress,
    isDone,
    fullMask: buildMask(finalMaskLength, maskPattern),
  }
}