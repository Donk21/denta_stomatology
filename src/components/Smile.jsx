import { useId } from 'react'

// Схематичная иллюстрация улыбки: цвет эмали, щели и неровность зубов
export default function Smile({ shade, gap, uneven }) {
  const uid = useId().replace(/:/g, '')
  const widths = [34, 40, 46, 56, 56, 46, 40, 34]
  const spacing = gap ? 6 : 2
  const total = widths.reduce((s, w) => s + w, 0) + spacing * (widths.length - 1)
  let x = (400 - total) / 2
  const tilts = uneven ? [4, -3, 6, -5, 3, -7, 2, -4] : widths.map(() => 0)
  const drops = uneven ? [4, 0, 8, 2, 6, 10, 0, 5] : widths.map(() => 0)

  return (
    <svg viewBox="0 0 400 240" className="smile" aria-hidden="true">
      <defs>
        <linearGradient id={`lip-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9837a" />
          <stop offset="1" stopColor="#b9584f" />
        </linearGradient>
        <linearGradient id={`tooth-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={shade} />
          <stop offset="1" stopColor={shade} stopOpacity="0.82" />
        </linearGradient>
        <clipPath id={`mouth-${uid}`}>
          <path d="M40 110 Q200 40 360 110 Q200 230 40 110Z" />
        </clipPath>
      </defs>
      <rect width="400" height="240" fill="#f4dcc8" />
      <g clipPath={`url(#mouth-${uid})`}>
        <rect width="400" height="240" fill="#5a1f22" />
        <rect y="50" width="400" height="38" fill="#e48f8f" />
        {widths.map((w, i) => {
          const tx = x
          x += w + spacing
          const h = 70 - Math.abs(i - 3.5) * 5
          return (
            <rect
              key={i}
              x={tx}
              y={82 + drops[i]}
              width={w}
              height={h}
              rx="10"
              fill={`url(#tooth-${uid})`}
              stroke="#00000014"
              transform={`rotate(${tilts[i]} ${tx + w / 2} ${82 + h / 2})`}
            />
          )
        })}
      </g>
      <path
        d="M30 108 Q120 70 200 82 Q280 70 370 108 Q200 60 30 108Z"
        fill={`url(#lip-${uid})`}
      />
      <path
        d="M30 112 Q200 250 370 112 Q200 205 30 112Z"
        fill={`url(#lip-${uid})`}
      />
    </svg>
  )
}
