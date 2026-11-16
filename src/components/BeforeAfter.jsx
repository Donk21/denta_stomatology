import { useState } from 'react'
import Smile from './Smile.jsx'

export default function BeforeAfter({ item }) {
  const [pos, setPos] = useState(50)

  return (
    <figure className="ba">
      <div className="ba__frame" style={{ '--pos': `${pos}%` }}>
        <div className="ba__layer">
          <Smile {...item.after} />
        </div>
        <div className="ba__layer ba__layer--before">
          <Smile {...item.before} />
        </div>
        <span className="ba__label ba__label--left">До</span>
        <span className="ba__label ba__label--right">После</span>
        <div className="ba__handle" aria-hidden="true" />
        <input
          className="ba__range"
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Сравнение до и после: ${item.title}`}
        />
      </div>
      <figcaption>
        <strong>{item.title}</strong>
        <span>{item.note}</span>
      </figcaption>
    </figure>
  )
}
