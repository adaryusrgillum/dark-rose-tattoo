import BookingSection from '../components/BookingSection'
import './PageWrapper.css'

const BookingPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Booking</h1>
          <p>How to Book Your Appointment</p>
        </div>
      </div>
      <BookingSection />
    </div>
  )
}

export default BookingPage
