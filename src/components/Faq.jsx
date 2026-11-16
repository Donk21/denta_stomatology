import { useState } from 'react'
import { FAQ } from '../data.js'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section section--tint" id="faq">
      <div className="container container--narrow">
        <SectionHead eyebrow="FAQ" title="Частые вопросы" />
        <div className="faq">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                >
                  {item.q}
                  <Icon name="plus" size={20} />
                </button>
                <div className="faq__a" id={`faq-${i}`} role="region">
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
