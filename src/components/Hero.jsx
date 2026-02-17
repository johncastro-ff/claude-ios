import { Phone, ArrowRight } from 'lucide-react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-pattern" />
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            Stillwater&apos;s Trusted HVAC Experts
          </div>
          <h1 className="hero-title">
            Keep Your Home
            <span className="hero-highlight"> Comfortable</span>
            <br />Year-Round
          </h1>
          <p className="hero-description">
            From sweltering Oklahoma summers to freezing winters, OKIE HVAC
            delivers reliable heating and cooling solutions for homes and
            businesses in Stillwater and the surrounding area.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <Phone size={18} />
              Get a Free Estimate
            </a>
            <a href="#services" className="btn btn-outline">
              Our Services
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">24/7</span>
              <span className="hero-stat-label">Emergency Service</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Satisfaction Guaranteed</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">Licensed</span>
              <span className="hero-stat-label">& Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
