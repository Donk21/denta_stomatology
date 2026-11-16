import { CASES } from '../data.js'
import BeforeAfter from './BeforeAfter.jsx'
import SectionHead from './SectionHead.jsx'

export default function Cases() {
  return (
    <section className="section" id="before-after">
      <div className="container">
        <SectionHead
          eyebrow="Результаты"
          title="До и после"
          text="Перетащите ползунок, чтобы сравнить результат лечения."
        />
        <div className="grid grid--3">
          {CASES.map((c) => (
            <BeforeAfter item={c} key={c.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
