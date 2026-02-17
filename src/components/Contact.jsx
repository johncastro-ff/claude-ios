import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thanks for reaching out! We\'ll get back to you shortly.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <p className="section-label">Contact Us</p>
            <h2 className="section-title">Get Your Free Estimate</h2>
            <p className="section-subtitle">
              Ready to get started? Reach out today for a free, no-obligation
              estimate on any HVAC service.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="contact-detail-label">Phone</p>
                  <a href="tel:+14055551234" className="contact-detail-value">
                    (405) 555-1234
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="contact-detail-label">Email</p>
                  <a
                    href="mailto:info@okiehvac.com"
                    className="contact-detail-value"
                  >
                    info@okiehvac.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="contact-detail-label">Location</p>
                  <p className="contact-detail-value">Stillwater, OK 74074</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(405) 555-0000"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Needed</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service...</option>
                <option value="ac-repair">AC Repair</option>
                <option value="ac-install">AC Installation</option>
                <option value="heating">Heating & Furnace</option>
                <option value="maintenance">Preventive Maintenance</option>
                <option value="air-quality">Indoor Air Quality</option>
                <option value="emergency">Emergency Repair</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your HVAC needs..."
                rows={4}
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
