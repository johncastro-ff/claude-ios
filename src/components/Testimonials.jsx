import { Star } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Stillwater, OK',
    text: 'Our AC went out in the middle of July and OKIE HVAC had a tech at our house within the hour. Professional, fast, and fair pricing. Highly recommend!',
    rating: 5,
  },
  {
    name: 'James T.',
    location: 'Stillwater, OK',
    text: 'We\'ve used OKIE HVAC for both our home and business. They installed a new furnace last winter and the whole process was seamless. Great communication throughout.',
    rating: 5,
  },
  {
    name: 'Linda K.',
    location: 'Perkins, OK',
    text: 'Honest and reliable. They diagnosed a problem that another company wanted to charge us thousands for, and fixed it at a fraction of the cost. Our go-to HVAC team.',
    rating: 5,
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="testimonials-header">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it — hear from homeowners and
            businesses across the Stillwater area.
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
