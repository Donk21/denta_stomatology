import { GUARANTEES } from '../data.js'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

export default function Guarantees() {
  return (
    <section className="section section--dark" id="guarantees">
      <div className="container">
        <SectionHead eyebrow="Гарантии" title="Отвечаем за результат" />
        <div className="grid grid--4">
          {GUARANTEES.map((g) => (
            <div className="guarantee" key={g.title}>
              <div className="guarantee__icon">
                <Icon name={g.icon} size={26} />
              </div>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
