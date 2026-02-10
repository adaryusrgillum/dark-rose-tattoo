import AboutSection from '../components/AboutSection'
import './PageWrapper.css'

const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>About</h1>
          <p>Your Local Tattoo Destination</p>
        </div>
      </div>
      <AboutSection />
    </div>
  )
}

export default AboutPage
