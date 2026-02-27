import { Mail, Clock } from 'lucide-react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-dandelion">Dandelion</span>
              <span className="logo-promotions">Promotions</span>
            </div>
            <p className="footer-tagline">
              Where transformation takes flight. Premium Meta ads for advanced
              aesthetic med spas that demand results.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li>Meta Ad Campaigns</li>
              <li>Ad Creative & Copy</li>
              <li>Retargeting Funnels</li>
              <li>Campaign Optimization</li>
              <li>Reporting & Strategy</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-list footer-contact-list">
              <li>
                <Mail size={16} />
                <a href="mailto:hello@dandelionpromotions.com">hello@dandelionpromotions.com</a>
              </li>
              <li>
                <Clock size={16} />
                <span>Response within 24 hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Dandelion Promotions. All rights reserved.</p>
          <p className="footer-license">
            Meta Ads for Aesthetic Med Spas
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
