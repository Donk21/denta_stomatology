import { CLINIC } from '../data.js'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

export default function Contacts({ onBook }) {
  return (
    <section className="section" id="contacts">
      <div className="container">
        <SectionHead eyebrow="Контакты" title="Ждём вас в клинике" />
        <div className="contacts">
          <div className="card contacts__info">
            <div className="contacts__row">
              <Icon name="map" />
              <div>
                <strong>{CLINIC.address}</strong>
                <span>{CLINIC.metro}</span>
              </div>
            </div>
            <div className="contacts__row">
              <Icon name="phone" />
              <div>
                <a href={CLINIC.phoneHref}>
                  <strong>{CLINIC.phone}</strong>
                </a>
                <span>Звонок бесплатный</span>
              </div>
            </div>
            <div className="contacts__row">
              <Icon name="mail" />
              <div>
                <a href={`mailto:${CLINIC.email}`}>
                  <strong>{CLINIC.email}</strong>
                </a>
              </div>
            </div>
            <div className="contacts__row">
              <Icon name="clock" />
              <div>
                {CLINIC.hours.map((h) => (
                  <span key={h.days}>
                    <b>{h.days}:</b> {h.time}
                  </span>
                ))}
              </div>
            </div>
            <button className="btn btn--primary btn--block" onClick={() => onBook()}>
              Записаться на приём
            </button>
          </div>
          <div className="contacts__map">
            <iframe
              title="Карта проезда"
              src="https://yandex.ru/map-widget/v1/?ll=37.633%2C55.776&z=15"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
