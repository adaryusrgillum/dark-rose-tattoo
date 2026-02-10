import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import TattooCarePage from './pages/TattooCarePage'
import ArtistsPage from './pages/ArtistsPage'
import BookingPage from './pages/BookingPage'
import TestimonialsPage from './pages/TestimonialsPage'

// Navigation component that knows about routing
const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Close menu when route changes
    setMenuOpen(false)
  }, [location])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="topbar">
      <Link to="/" className="logo-link">
        <img
          className="logo-mark"
          src="/Firefly__3d%20and%20clarity%20175685%20jKf%20(3).png"
          alt="Dark Rose Tattoo Studio logo"
        />
      </Link>
      <Link to="/" className="brand-title-link">
        <div className="brand-title">Dark Rose Tattoo Studio</div>
      </Link>
      <button
        className="menu-toggle"
        aria-controls="site-nav"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span></span>
      </button>
      <nav id="site-nav" className={menuOpen ? 'is-open' : ''}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/tattoo-care" onClick={() => setMenuOpen(false)}>Tattoo Care</Link>
        <Link to="/artists" onClick={() => setMenuOpen(false)}>Artists</Link>
        <Link to="/booking" onClick={() => setMenuOpen(false)}>Booking</Link>
        <Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
      </nav>
    </header>
  )
}

// Footer component
const Footer = () => (
  <footer className="site-footer">
    <div className="footer-container">
      <div className="footer-brand">
        <h3>Dark Rose Tattoo Studio</h3>
        <p>548 Dunkard Avenue, Westover, WV</p>
      </div>
      <div className="footer-contact">
        <p>Text Ben: <a href="tel:304-266-3501">304-266-3501</a></p>
        <div className="social-links">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Instagram</a>
        </div>
      </div>
      <div className="footer-hours">
        <p>Walk-ins Welcome</p>
        <p>Appointments Recommended</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Dark Rose Tattoo Studio. All rights reserved.</p>
      <p>Clean. Custom. Community-Focused.</p>
    </div>
  </footer>
)

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function App() {
  useEffect(() => {
    const setViewportUnits = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setViewportUnits()
    window.addEventListener('resize', setViewportUnits)

    return () => window.removeEventListener('resize', setViewportUnits)
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tattoo-care" element={<TattooCarePage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
