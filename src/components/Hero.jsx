import Icon from './Icon.jsx'
import { scrollToId } from '../scroll.js'

export default function Hero({ onBook }) {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="eyebrow">Стоматология в центре Москвы</span>
          <h1>
            Здоровая улыбка <span className="accent">без боли и стресса</span>
          </h1>
          <p>
            Лечение, имплантация, ортодонтия и эстетика в одной клинике. Фиксированная стоимость в плане лечения и
            гарантия на все работы.
          </p>
          <div className="hero__cta">
            <button className="btn btn--primary btn--lg" onClick={() => onBook()}>
              Записаться на консультацию
            </button>
            <button className="btn btn--ghost btn--lg" onClick={() => scrollToId('services')}>
              Услуги и цены
            </button>
          </div>
          <ul className="hero__stats">
            <li>
              <strong>15+</strong>
              <span>лет опыта</span>
            </li>
            <li>
              <strong>12 000</strong>
              <span>пациентов</span>
            </li>
            <li>
              <strong>4.9</strong>
              <span>рейтинг отзывов</span>
            </li>
          </ul>
        </div>
        <div className="hero__media">
          <img src="/assets/clinic.png" alt="Кабинет клиники Denta" />
          <div className="hero__badge">
            <Icon name="shield" size={22} />
            <span>
              Бесплатная
              <br />
              консультация
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
