import Link from 'next/link'
import { DRAKE_FRAMES, DRAKE_H, DRAKE_W } from './drake-frames'

type DrakeSpriteProps = {
  scale?: number
  className?: string
}

// Pixel-art drake drawn with SVG shapes only. Shapes are never an LCP
// candidate, so the drake does not change how the page's speed is measured.
export function DrakeSprite({ scale = 2, className = '' }: DrakeSpriteProps) {
  return (
    <svg
      viewBox={`0 0 ${DRAKE_W} ${DRAKE_H}`}
      width={DRAKE_W * scale}
      height={DRAKE_H * scale}
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
      className={`drake-sprite ${className}`.trim()}
    >
      {DRAKE_FRAMES.map((frame, i) => (
        <g key={i} className={`drake-frame drake-frame-${i}`}>
          {frame.map(([fill, d]) => (
            <path key={fill} fill={fill} d={d} />
          ))}
        </g>
      ))}
    </svg>
  )
}

// Walks along the bottom edge of the home page and links to the game.
// Pure CSS animation, no client JavaScript. It appears 2 s after the first
// paint, after the main content has loaded.
export default function DrakeWalker() {
  return (
    <Link
      href="/game"
      prefetch={false}
      aria-label="Borka.exe: a pixel game about my IT path (coming soon)"
      className="drake-walker"
    >
      <DrakeSprite />
    </Link>
  )
}
