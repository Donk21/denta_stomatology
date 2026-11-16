import { NAV } from '../data.js'
import { scrollToId } from '../scroll.js'

const YEAR = new Date().getFullYear()

export default function Footer({ onPrivacy }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img src="/assets/logo.jpg" alt="Denta" className="footer__logo" />
        <nav>
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToId(n.id)
              }}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="footer__meta">
          <span>© {YEAR} Стоматология «Denta»</span>
          <button className="link" onClick={onPrivacy}>
            Политика конфиденциальности
          </button>
          <span>Имеются противопоказания. Необходима консультация специалиста.</span>
        </div>
      </div>
    </footer>
  )
}
