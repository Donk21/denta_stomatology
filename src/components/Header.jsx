import { useEffect, useState } from 'react'
import { CLINIC, NAV } from '../data.js'
import Icon from './Icon.jsx'
import { scrollToId } from '../scroll.js'

export default function Header({ onBook }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollToId(id)
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a
          href="#top"
          className="header__logo"
          onClick={(e) => {
            e.preventDefault()
            setMenuOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          aria-label="Denta — наверх"
        >
          <img src="/assets/logo.jpg" alt="Denta" />
        </a>

        <nav className={`header__nav ${menuOpen ? 'is-open' : ''}`} aria-label="Основная навигация">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={(e) => go(e, item.id)}>
              {item.label}
            </a>
          ))}
          <a className="header__nav-phone" href={CLINIC.phoneHref}>
            {CLINIC.phone}
          </a>
        </nav>

        <div className="header__actions">
          <a className="btn btn--ghost header__call" href={CLINIC.phoneHref} aria-label="Позвонить">
            <Icon name="phone" size={18} />
            <span className="header__call-text">{CLINIC.phone}</span>
          </a>
          <button className="btn btn--primary" onClick={() => onBook()}>
            Записаться
          </button>
          <button
            className="header__burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
