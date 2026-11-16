import { DOCTORS } from '../data.js'
import SectionHead from './SectionHead.jsx'

const initials = (name) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('')

export default function Doctors({ onBook }) {
  return (
    <section className="section" id="doctors">
      <div className="container">
        <SectionHead
          eyebrow="Команда"
          title="Наши врачи"
          text="Регулярно повышаем квалификацию на курсах в России и Европе."
        />
        <div className="grid grid--4">
          {DOCTORS.map((d) => (
            <article className="card doctor" key={d.name}>
              <div className="doctor__avatar" aria-hidden="true">
                {initials(d.name)}
              </div>
              <h3>{d.name}</h3>
              <p className="doctor__role">{d.role}</p>
              <p className="doctor__exp">Стаж {d.experience} лет</p>
              <p className="doctor__about">{d.about}</p>
              <div className="tags">
                {d.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <button className="btn btn--ghost btn--sm doctor__btn" onClick={() => onBook()}>
                Записаться к врачу
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
