import { useState } from 'react'
import { Mail, CalendarCheck, Clock, Send } from 'lucide-react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    practice: '',
    monthlySpend: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks for reaching out! We\'ll send you a calendar link to book your strategy session.')
    setFormData({ name: '', email: '', practice: '', monthlySpend: '', message: '' })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <p className="section-label">Get Started</p>
            <h2 className="section-title">Book Your Free Strategy Session</h2>
            <p className="section-subtitle">
              In 30 minutes, we&apos;ll audit your current ad performance,
              identify your biggest opportunities, and show you exactly how
              we&apos;d fill your treatment calendar.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <CalendarCheck size={20} />
                </div>
                <div>
                  <p className="contact-detail-label">Strategy Call</p>
                  <p className="contact-detail-value">
                    Free 30-minute session
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="contact-detail-label">Email</p>
                  <a
                    href="mailto:hello@dandelionpromotions.com"
                    className="contact-detail-value"
                  >
                    hello@dandelionpromotions.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="contact-detail-label">Response Time</p>
                  <p className="contact-detail-value">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Dr. Jane Smith"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="practice">Practice Name</label>
                <input
                  type="text"
                  id="practice"
                  name="practice"
                  value={formData.practice}
                  onChange={handleChange}
                  placeholder="Glow Aesthetics Med Spa"
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
                placeholder="jane@glowmedspa.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="monthlySpend">Current Monthly Ad Spend</label>
              <select
                id="monthlySpend"
                name="monthlySpend"
                value={formData.monthlySpend}
                onChange={handleChange}
                required
              >
                <option value="">Select a range...</option>
                <option value="none">Not running ads yet</option>
                <option value="under-2k">Under $2,000/mo</option>
                <option value="2k-5k">$2,000 – $5,000/mo</option>
                <option value="5k-10k">$5,000 – $10,000/mo</option>
                <option value="10k-plus">$10,000+/mo</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">What treatments do you want to promote?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your practice, your key treatments, and your goals..."
                rows={4}
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              <Send size={18} />
              Request Strategy Session
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
