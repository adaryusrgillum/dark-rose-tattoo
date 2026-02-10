import './BookingSection.css'

const BookingSection = () => {
  return (
    <section className="booking-section" id="booking">
      <div className="section-container">
        <div className="content-block intro-block">
          <h3>Understanding Our Booking Philosophy</h3>
          <p>
            At Dark Rose Tattoo Studio, we've deliberately structured our booking process to balance accessibility with the logistical realities of professional tattooing. Unlike shops that rely solely on impersonal online booking systems or those that operate purely on chaotic walk-in availability, we offer a hybrid approach that combines the convenience of modern communication with the personal touch that custom tattooing demands. This system allows us to maintain the flexibility necessary for creative work while ensuring that every client receives the attention and planning their tattoo deserves.
          </p>
          <p>
            We believe that booking your tattoo should be straightforward, not stressful. Whether you're ready to commit to a large custom project or looking to snag available time for smaller pieces, our process is designed to connect you with the right artist at the right time. Transparency regarding availability, pricing, and expectations forms the foundation of our booking philosophy—we'd rather have honest conversations about timelines than overpromise and underdeliver.
          </p>
        </div>

        <div className="booking-methods">
          <div className="method-card">
            <div className="method-header">
              <span className="method-number">01</span>
              <h3>In-Person Booking</h3>
              <span className="method-badge recommended">Recommended for New Clients</span>
            </div>
            <div className="method-content">
              <p>
                For clients who have never visited Dark Rose Tattoo Studio, we strongly recommend stopping by the shop in person to book your appointment. This face-to-face interaction serves multiple purposes: you get to see our space and verify our hygiene standards firsthand, you can browse physical portfolios that may not be fully represented online, and you can meet multiple artists to determine whose style best aligns with your vision.
              </p>
              <p>
                In-person booking allows for immediate consultation, even if brief. You can discuss placement options on your actual body, view healed work examples in person, and get immediate answers to questions about the process. For larger custom pieces, this initial visit establishes the rapport necessary for a successful artist-client relationship. Even if your preferred artist isn't available for immediate conversation, you can schedule a consultation for a later date while getting a feel for the studio environment.
              </p>
              <p>
                Our location at <strong>548 Dunkard Avenue in Westover, WV</strong>, makes us easily accessible for in-person visits. We recommend visiting during our posted hours, though calling ahead can confirm availability if you're traveling from a distance. Walk-ins for booking purposes are always welcome, even if you don't intend to get tattooed that day.
              </p>
            </div>
          </div>

          <div className="method-card">
            <div className="method-header">
              <span className="method-number">02</span>
              <h3>Direct Text Booking</h3>
              <span className="method-badge">Returning Clients</span>
            </div>
            <div className="method-content">
              <p>
                For returning clients or those who know exactly which artist they want to work with, text messaging offers the most efficient booking pathway. This method eliminates phone tag and allows artists to respond between clients or during breaks in their schedule. Text booking is particularly effective for simple appointments, touch-ups, or when you have a clear idea of what you want and don't require extensive consultation.
              </p>
              <div className="contact-info">
                <h4>For appointments with Ben:</h4>
                <p>Text <strong>304-266-3501</strong></p>
                <p>When texting, include your name, a brief description of the tattoo you want (size, placement, style), your preferred dates/times, and any reference images you have available. Ben typically responds to booking texts within 24-48 hours, though response times may be longer during convention weekends or busy periods. For large custom work, he may request an in-person consultation before scheduling tattoo time.</p>
              </div>
            </div>
          </div>

          <div className="method-card">
            <div className="method-header">
              <span className="method-number">03</span>
              <h3>Instagram Direct Messages</h3>
              <span className="method-badge">Flash & Quick Questions</span>
            </div>
            <div className="method-content">
              <p>
                Many of our artists maintain active Instagram presences where they announce flash availability, last-minute openings, and booking windows. This platform works particularly well for visual reference sharing and quick questions about style compatibility.
              </p>
              <div className="contact-info">
                <h4>For Christian:</h4>
                <p>DM <strong>@cdfh_tattoo</strong> on Instagram</p>
                <p>Christian uses Instagram as his primary booking platform for new clients, often posting flash designs and availability stories. When DMing, provide the same information you'd include in a text: your concept, placement, size approximations, and scheduling flexibility. He typically responds to DMs daily.</p>
              </div>
              <div className="contact-info">
                <h4>For Courtney:</h4>
                <p>DM <strong>@myers_court_tattoos</strong> on Instagram</p>
                <p>Courtney books several weeks in advance for color work and illustrative pieces, so early contact is essential. Her Instagram also features healed work photos and process videos that can help you understand her approach before booking.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block">
          <h3>What to Include in Your Booking Inquiry</h3>
          <p>Regardless of your booking method, providing comprehensive information upfront streamlines the process and increases your chances of securing your preferred date. Include the following details:</p>
          <ul className="info-list">
            <li><strong>Personal Information:</strong> Your full name, phone number, and whether you're a first-time client at Dark Rose.</li>
            <li><strong>Tattoo Details:</strong> A clear description of what you want tattooed. If you have reference images, describe them or attach them to texts/DMs. Specify whether you want black and grey or color work, and provide approximate size (in inches) and specific body placement.</li>
            <li><strong>Scheduling Preferences:</strong> Your ideal dates and times, plus your flexibility. If you have constraints (work schedule, travel plans, wanting the tattoo before a specific event), communicate these clearly.</li>
            <li><strong>Experience Level:</strong> Let us know if this is your first tattoo or if you have extensive experience. This helps artists gauge how much explanation you might need about the process.</li>
            <li><strong>Budget Considerations:</strong> While we can't provide exact quotes without seeing the design and discussing details, providing your budget range helps artists suggest appropriate sizing or complexity levels.</li>
          </ul>
        </div>

        <div className="content-block highlight-block">
          <h3>The Consultation Process</h3>
          <p>
            For custom work exceeding two hours or involving complex design elements, we require a consultation before booking tattoo time. This appointment—typically 15-30 minutes and free of charge—allows artist and client to align on the vision, discuss placement and sizing, and establish a clear plan for the tattoo session.
          </p>
          <p>
            During consultation, bring all reference materials—photos, artwork, color swatches, or even objects—that inform your vision. Your artist will take measurements of the placement area, discuss how the design will flow with your body's natural lines, and provide honest feedback about what will work best for longevity and visual impact. This is also when you'll receive a firm price quote and estimated time requirement.
          </p>
          <p>
            Consultations can be booked via the same text/DM methods or scheduled in person. For clients traveling from out of town, we can sometimes arrange phone or video consultations, though in-person is always preferred for accurate placement assessment.
          </p>
        </div>

        <div className="content-block warning-block">
          <h3>Deposit and Cancellation Policies</h3>
          <p>
            To secure your appointment, Dark Rose requires a non-refundable deposit that applies toward the final cost of your tattoo. This deposit—typically $50-$100 depending on the artist and project size—protects our artists' time and ensures commitment from clients. Deposits are forfeited if you cancel with less than 48 hours' notice or fail to show for your appointment without communication.
          </p>
          <p>
            We understand that life happens—illness, emergencies, unavoidable conflicts. If you need to reschedule, contact your artist as soon as possible. With adequate notice (48+ hours), we can typically transfer your deposit to a new date. However, last-minute cancellations or no-shows result in deposit forfeiture and may require an additional deposit to book future appointments.
          </p>
        </div>

        <div className="content-block">
          <h3>Preparing for Your Appointment</h3>
          <p>
            Once booked, you'll receive confirmation details including date, time, estimated duration, and any specific preparation instructions. We recommend confirming your appointment 24 hours in advance via text. On the day of your tattoo, arrive 10-15 minutes early to complete any necessary paperwork and settle in before the session begins.
          </p>
          <p>
            Bring a valid ID (we tattoo clients 18+ only, no exceptions), payment method (we accept cash and major credit cards), and anything you need for comfort during longer sessions—headphones, entertainment, snacks for breaks. Wear appropriate clothing for easy access to the tattoo area, and ensure you've followed the pre-care guidelines outlined in our Tattoo Care section.
          </p>
        </div>

        <div className="content-block highlight-block">
          <h3>Walk-In Availability</h3>
          <p>
            While we emphasize appointment-based booking for custom work, Dark Rose maintains walk-in availability for smaller pieces, flash designs, and spontaneous tattoo decisions. Walk-in availability varies daily based on artist schedules and existing appointments. We announce same-day availability via Instagram stories, and you can always call or text the shop to check current walk-in status.
          </p>
          <p>
            For best walk-in results, arrive early in the day (when artists are fresh and schedules are open), have your design idea clearly conceptualized, and be flexible with placement and sizing. Flash designs—pre-drawn artwork that artists want to tattoo—often offer the best walk-in opportunities, providing high-quality artwork at potentially reduced rates compared to custom work.
          </p>
        </div>

        <div className="content-block cta-block">
          <h3>Ready to Start?</h3>
          <p>
            Your tattoo journey begins with a single step. Whether you're ready to book or just have questions, we're here to help. Reach out today and let's create something amazing together.
          </p>
          <div className="cta-buttons">
            <a href="tel:304-266-3501" className="btn btn-primary">Text Ben Now</a>
            <a href="/artists" className="btn btn-secondary">View All Artists</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingSection
