import {
  Target,
  Palette,
  BarChart3,
  Megaphone,
  RefreshCw,
  FileText,
} from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: Target,
    title: 'Meta Ad Campaigns',
    description:
      'Full-funnel Facebook & Instagram campaigns built specifically for high-ticket aesthetic treatments. From awareness to booked consultation.',
  },
  {
    icon: Palette,
    title: 'Ad Creative & Copy',
    description:
      'Scroll-stopping visuals and direct-response copy that positions your treatments as premium — and drives patients to book.',
  },
  {
    icon: BarChart3,
    title: 'Campaign Optimization',
    description:
      'Continuous A/B testing, audience refinement, and budget reallocation to maximize your ROAS and minimize cost per consultation.',
  },
  {
    icon: Megaphone,
    title: 'Retargeting Funnels',
    description:
      'Multi-touchpoint retargeting sequences that nurture warm audiences with testimonials, education, and offers until they book.',
  },
  {
    icon: RefreshCw,
    title: 'Monthly Creative Refresh',
    description:
      'Fresh ad creatives every month to combat fatigue. Seasonal campaigns, new treatment spotlights, and trending formats.',
  },
  {
    icon: FileText,
    title: 'Reporting & Strategy',
    description:
      'Transparent dashboards tracking spend, leads, cost per consultation, and ROAS. Plus strategic recommendations every month.',
  },
]

function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Your Full-Service Ad Engine</h2>
          <p className="section-subtitle">
            Everything your med spa needs to turn Meta ads into a predictable
            stream of high-ticket patient consultations.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-icon">
                <service.icon size={28} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
