import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Video */}
      <section className="hero-section">
        <div className="video-container">
          <video autoPlay loop muted playsInline>
            <source src={`${import.meta.env.BASE_URL}firefly_gears.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay">
            <img
              className="title-image"
              src={`${import.meta.env.BASE_URL}Firefly__3d%20and%20clarity%20175685%20jKf%20(5).png`}
              alt="Dark Rose Tattoo Studio"
            />
          </div>
        </div>
      </section>

      {/* Brief Intro Section */}
      <section className="home-intro">
        <div className="intro-container">
          <h1 className="intro-title">Welcome to Dark Rose Tattoo Studio</h1>
          <p className="intro-subtitle">Where Art Meets Skin in Westover, WV</p>
          <p className="intro-text">
            Walking through the doors of Dark Rose Tattoo Studio at <strong>548 Dunkard Avenue</strong> in 
            Westover, West Virginia, you're not just entering a tattoo shop—you're stepping into a 
            creative sanctuary where artistic vision transforms into permanent expression.
          </p>
          <p className="intro-text">
            Situated just across the river from the vibrant college town of Morgantown, Dark Rose has 
            established itself as the premier destination for custom tattoo work in North Central 
            West Virginia.
          </p>
          <div className="intro-cta">
            <Link to="/booking" className="btn btn-primary">Book a Consultation</Link>
            <Link to="/gallery" className="btn btn-secondary">View Our Gallery</Link>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="quick-links">
        <div className="links-container">
          <Link to="/gallery" className="quick-link-card">
            <span className="link-icon">🎨</span>
            <h3>Gallery</h3>
            <p>View our portfolio of black & grey realism, floral work, script, and more.</p>
          </Link>
          
          <Link to="/artists" className="quick-link-card">
            <span className="link-icon">✒️</span>
            <h3>Our Artists</h3>
            <p>Meet Ben, Christian, and Courtney—masters of their craft.</p>
          </Link>
          
          <Link to="/tattoo-care" className="quick-link-card">
            <span className="link-icon">✨</span>
            <h3>Aftercare</h3>
            <p>Learn how to properly care for your new tattoo and ensure it heals beautifully.</p>
          </Link>
          
          <Link to="/booking" className="quick-link-card">
            <span className="link-icon">📅</span>
            <h3>Book Now</h3>
            <p>Ready to get started? Schedule your consultation or appointment today.</p>
          </Link>
        </div>
      </section>

      {/* Location Banner */}
      <section className="location-banner">
        <div className="location-content">
          <h2>Visit Us</h2>
          <p className="location-address">548 Dunkard Avenue, Westover, WV</p>
          <p className="location-info">
            Located beside Huntington Steel, just minutes from Morgantown and WVU.
          </p>
          <p className="location-note">
            Walk-ins welcome • Appointments recommended
          </p>
          <Link to="/about" className="btn btn-outline">Learn More About Us</Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
