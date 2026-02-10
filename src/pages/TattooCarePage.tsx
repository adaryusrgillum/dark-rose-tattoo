import TattooCareSection from '../components/TattooCareSection'
import './PageWrapper.css'

const TattooCarePage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Tattoo Care</h1>
          <p>Comprehensive Aftercare Guide</p>
        </div>
      </div>
      <TattooCareSection />
    </div>
  )
}

export default TattooCarePage
