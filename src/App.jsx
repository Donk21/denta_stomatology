import { useCallback, useState } from 'react'
import { CLINIC } from './data.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Doctors from './components/Doctors.jsx'
import Services from './components/Services.jsx'
import ServiceDetails from './components/ServiceDetails.jsx'
import Cases from './components/Cases.jsx'
import Guarantees from './components/Guarantees.jsx'
import Reviews from './components/Reviews.jsx'
import Faq from './components/Faq.jsx'
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'
import Modal from './components/Modal.jsx'
import Icon from './components/Icon.jsx'
import BookingForm from './components/BookingForm.jsx'
import Privacy from './components/Privacy.jsx'
import './App.css'

export default function App() {
  const [service, setService] = useState(null)
  const [booking, setBooking] = useState(null) // null | { serviceId }
  const [privacyOpen, setPrivacyOpen] = useState(false)

  const openBooking = useCallback((serviceId = '') => {
    setService(null)
    setBooking({ serviceId })
  }, [])
  const closeService = useCallback(() => setService(null), [])
  const closeBooking = useCallback(() => setBooking(null), [])
  const openPrivacy = useCallback(() => setPrivacyOpen(true), [])
  const closePrivacy = useCallback(() => setPrivacyOpen(false), [])

  return (
    <>
      <Header onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <Doctors onBook={openBooking} />
        <Services onOpen={setService} />
        <Cases />
        <Guarantees />
        <Reviews />
        <Faq />
        <Contacts onBook={openBooking} />
      </main>
      <Footer onPrivacy={openPrivacy} />

      <a className="fab-call" href={CLINIC.phoneHref} aria-label="Позвонить в клинику">
        <Icon name="phone" size={24} />
      </a>

      <Modal open={!!service} onClose={closeService} title={service?.title ?? ''} wide>
        {service && <ServiceDetails service={service} onBook={openBooking} />}
      </Modal>
      <Modal open={!!booking} onClose={closeBooking} title="Запись на приём">
        {booking && (
          <BookingForm
            key={booking.serviceId}
            serviceId={booking.serviceId}
            onPrivacy={openPrivacy}
            onDone={closeBooking}
          />
        )}
      </Modal>
      <Modal open={privacyOpen} onClose={closePrivacy} title="Политика конфиденциальности" wide>
        <Privacy />
      </Modal>
    </>
  )
}
