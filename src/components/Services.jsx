import { SERVICES } from '../data.js'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

export default function Services({ onOpen }) {
  return (
    <section className="section section--tint" id="services">
      <div className="container">
        <SectionHead
          eyebrow="Услуги"
          title="Услуги и цены"
          text="Нажмите на услугу, чтобы узнать подробности и стоимость."
        />
        <div className="grid grid--3">
          {SERVICES.map((s) => (
            <button className="card service" key={s.id} onClick={() => onOpen(s)}>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <div className="service__foot">
                <span className="service__price">{s.price}</span>
                <span className="service__more">
                  Подробнее <Icon name="arrow" size={16} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
