import { CalendarCheck, ArrowRight } from 'lucide-react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-pattern" />
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            Meta Ads Agency for Advanced Aesthetic Med Spas
          </div>
          <h1 className="hero-title">
            Fill Your Treatment Calendar
            <span className="hero-highlight"> With High-Ticket </span>
            <br />Patients
          </h1>
          <p className="hero-description">
            We engineer Meta ad campaigns that turn your advanced aesthetic
            equipment into a patient-generating machine. Morpheus8, CoolSculpting,
            laser treatments — we know how to sell high-ticket procedures.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <CalendarCheck size={18} />
              Book Your Strategy Session
            </a>
            <a href="#services" className="btn btn-outline">
              See How It Works
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">4.2x</span>
              <span className="hero-stat-label">Average ROAS</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">$30–$80</span>
              <span className="hero-stat-label">Cost Per Consultation</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">90 Days</span>
              <span className="hero-stat-label">To Measurable Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
