import TestimonialsSection from '../components/TestimonialsSection'
import './PageWrapper.css'

const TestimonialsPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Testimonials</h1>
          <p>What Our Clients Say</p>
        </div>
      </div>
      <TestimonialsSection />
    </div>
  )
}

export default TestimonialsPage
