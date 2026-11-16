import { useState } from 'react'
import { CLINIC, SERVICES } from '../data.js'
import Icon from './Icon.jsx'

function formatPhone(value) {
  let d = value.replace(/\D/g, '')
  if (d.startsWith('8')) d = '7' + d.slice(1)
  if (!d.startsWith('7')) d = '7' + d
  d = d.slice(0, 11)
  const p = [d.slice(1, 4), d.slice(4, 7), d.slice(7, 9), d.slice(9, 11)]
  let out = '+7'
  if (p[0]) out += ` (${p[0]}`
  if (p[0].length === 3) out += ')'
  if (p[1]) out += ` ${p[1]}`
  if (p[2]) out += `-${p[2]}`
  if (p[3]) out += `-${p[3]}`
  return out
}

export default function BookingForm({ serviceId = '', onPrivacy, onDone }) {
  const [form, setForm] = useState({ name: '', phone: '', service: serviceId, comment: '', agree: false })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: key === 'phone' ? formatPhone(value) : value }))
    setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (form.name.trim().length < 2) er.name = 'Укажите имя'
    if (form.phone.replace(/\D/g, '').length !== 11) er.phone = 'Укажите номер телефона полностью'
    if (!form.agree) er.agree = 'Необходимо согласие на обработку данных'
    setErrors(er)
    if (Object.keys(er).length === 0) setSent(true)
  }

  if (sent) {
    return (
      <div className="booking-success">
        <div className="booking-success__icon">
          <Icon name="check" size={32} />
        </div>
        <p>
          Спасибо, {form.name.trim()}! Администратор перезвонит вам в течение 15 минут в рабочее время, чтобы
          подобрать удобное время приёма.
        </p>
        <button className="btn btn--primary" onClick={onDone}>
          Хорошо
        </button>
      </div>
    )
  }

  return (
    <form className="booking" onSubmit={submit} noValidate>
      <p className="booking__lead">
        Оставьте контакты — мы перезвоним и подберём удобное время. Или позвоните нам:{' '}
        <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>
      </p>
      <label className="field">
        <span>Имя</span>
        <input value={form.name} onChange={set('name')} placeholder="Как к вам обращаться" autoComplete="name" />
        {errors.name && <em>{errors.name}</em>}
      </label>
      <label className="field">
        <span>Телефон</span>
        <input
          value={form.phone}
          onChange={set('phone')}
          placeholder="+7 (___) ___-__-__"
          inputMode="tel"
          autoComplete="tel"
        />
        {errors.phone && <em>{errors.phone}</em>}
      </label>
      <label className="field">
        <span>Услуга</span>
        <select value={form.service} onChange={set('service')}>
          <option value="">Консультация / не знаю</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Комментарий</span>
        <textarea value={form.comment} onChange={set('comment')} rows="3" placeholder="Удобное время, пожелания" />
      </label>
      <label className="check">
        <input type="checkbox" checked={form.agree} onChange={set('agree')} />
        <span>
          Я согласен(на) с{' '}
          <button type="button" className="link" onClick={onPrivacy}>
            политикой конфиденциальности
          </button>
        </span>
      </label>
      {errors.agree && <em className="check__error">{errors.agree}</em>}
      <button className="btn btn--primary btn--block" type="submit">
        Записаться
      </button>
    </form>
  )
}
