'use client'

interface SquaresProps {
  borderColor?: string
  squareSize?: number
  className?: string
}

export function Squares({
  borderColor = '#888',
  squareSize = 40,
  className,
}: SquaresProps) {
  const style: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(${borderColor} 1px, transparent 1px),
      linear-gradient(90deg, ${borderColor} 1px, transparent 1px)
    `,
    backgroundSize: `${squareSize}px ${squareSize}px`,
    backgroundAttachment: 'fixed',
  }

  return (
    <div className={`relative w-full h-full pointer-events-none ${className}`}>
      <div className="absolute inset-0 mask-fade" style={style} />
    </div>
  )
}
