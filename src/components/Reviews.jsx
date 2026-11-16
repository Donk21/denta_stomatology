import { REVIEWS } from '../data.js'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'

export default function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <SectionHead eyebrow="Отзывы" title="Что говорят пациенты" />
        <div className="grid grid--2">
          {REVIEWS.map((r) => (
            <article className="card review" key={r.name}>
              <div className="review__stars" aria-label={`Оценка ${r.rating} из 5`}>
                {Array.from({ length: r.rating }, (_, i) => (
                  <Icon name="star" size={18} key={i} />
                ))}
              </div>
              <p>«{r.text}»</p>
              <footer>
                <span className="review__avatar" aria-hidden="true">
                  {r.name[0]}
                </span>
                <span>
                  <strong>{r.name}</strong>
                  <small>{r.service}</small>
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
