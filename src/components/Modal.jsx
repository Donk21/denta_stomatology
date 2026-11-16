import { useEffect, useRef } from 'react'
import Icon from './Icon.jsx'

const stack = []

export default function Modal({ open, onClose, title, children, wide = false }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const token = {}
    stack.push(token)
    // Escape закрывает только верхнюю модалку
    const onKey = (e) => e.key === 'Escape' && stack[stack.length - 1] === token && onClose()
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    dialogRef.current?.focus()
    return () => {
      stack.splice(stack.indexOf(token), 1)
      if (stack.length === 0) document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        ref={dialogRef}
        className={`modal ${wide ? 'modal--wide' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
      >
        <button className="modal__close" onClick={onClose} aria-label="Закрыть">
          <Icon name="close" size={22} />
        </button>
        <h2 className="modal__title">{title}</h2>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  )
}
