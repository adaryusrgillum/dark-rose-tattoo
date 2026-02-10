import ArtistsSection from '../components/ArtistsSection'
import './PageWrapper.css'

const ArtistsPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Artists</h1>
          <p>Meet the Dark Rose Team</p>
        </div>
      </div>
      <ArtistsSection />
    </div>
  )
}

export default ArtistsPage
