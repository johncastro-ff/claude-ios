import { Star } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Dr. Rachel M.',
    location: 'Aesthetic Med Spa, Scottsdale AZ',
    text: 'Dandelion filled our Morpheus8 calendar within 6 weeks. We went from 3 treatments a week to fully booked. The ad creative is stunning and the patients who come in are pre-sold on the treatment.',
    rating: 5,
  },
  {
    name: 'Jessica L.',
    location: 'Luxe Skin Studio, Austin TX',
    text: 'We spent $12K with a "full-service" agency and got nothing. Dandelion generated 47 consultation bookings in our first month for half the ad spend. They actually understand how to sell aesthetic treatments.',
    rating: 5,
  },
  {
    name: 'Dr. Anthony K.',
    location: 'Advanced Dermatology & Aesthetics, Miami FL',
    text: 'The ROI reporting alone is worth the fee. I can see exactly what every ad dollar generates. Our CoolSculpting revenue is up 3x since we started with Dandelion. Best investment we\'ve made.',
    rating: 5,
  },
]

function Testimonials() {
  return (
    <section id="results" className="testimonials section">
      <div className="container">
        <div className="testimonials-header">
          <p className="section-label">Client Results</p>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it — hear from med spa owners who
            transformed their patient pipeline with Dandelion.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-location">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
