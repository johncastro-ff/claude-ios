import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-okie">OKIE</span>
              <span className="logo-hvac">HVAC</span>
            </div>
            <p className="footer-tagline">
              Keeping Stillwater comfortable year-round with reliable heating,
              cooling, and air quality solutions.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li>AC Repair & Installation</li>
              <li>Heating & Furnace Services</li>
              <li>Preventive Maintenance</li>
              <li>Indoor Air Quality</li>
              <li>Emergency Repairs</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-list footer-contact-list">
              <li>
                <Phone size={16} />
                <a href="tel:+14055551234">(405) 555-1234</a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:info@okiehvac.com">info@okiehvac.com</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>Stillwater, OK 74074</span>
              </li>
              <li>
                <Clock size={16} />
                <span>Mon–Sat: 7AM – 7PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} OKIE HVAC. All rights reserved.</p>
          <p className="footer-license">
            Licensed &amp; Insured | Stillwater, Oklahoma
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
