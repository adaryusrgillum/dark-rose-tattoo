import GallerySection from '../components/GallerySection'
import './PageWrapper.css'

const GalleryPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Gallery</h1>
          <p>Portfolio of Permanent Art</p>
        </div>
      </div>
      <GallerySection />
    </div>
  )
}

export default GalleryPage
