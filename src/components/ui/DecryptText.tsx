'use client'
import { useDecryptText } from '@/hooks/useDecryptText'

type DecryptTextProps = {
  text: string
  speed?: number
  delay?: number
  baseLength?: number
  className?: string
}

export default function DecryptText({
  text,
  speed = 20,
  delay = 1500,
  baseLength = 30,
  className,
}: DecryptTextProps) {
  const { displayed } = useDecryptText(text, { speed, delay, baseLength })

  return <span className={className}>{displayed}</span>
}
