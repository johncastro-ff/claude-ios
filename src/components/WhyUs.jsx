import { Clock, Award, DollarSign, Users } from 'lucide-react'
import './WhyUs.css'

const reasons = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'HVAC emergencies don\'t wait for business hours. Neither do we. Call us anytime, day or night.',
  },
  {
    icon: Award,
    title: 'Licensed Professionals',
    description:
      'Our technicians are fully licensed, insured, and trained on the latest HVAC systems and techniques.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'No hidden fees or surprise charges. We provide upfront quotes before any work begins.',
  },
  {
    icon: Users,
    title: 'Local & Family-Owned',
    description:
      'We\'re your Stillwater neighbors. We treat every home like our own and every customer like family.',
  },
]

function WhyUs() {
  return (
    <section id="why-us" className="why-us section">
      <div className="container">
        <div className="why-us-header">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">The OKIE HVAC Difference</h2>
          <p className="section-subtitle">
            We combine expert craftsmanship with honest service to earn your
            trust and keep your home comfortable.
          </p>
        </div>

        <div className="why-us-grid">
          {reasons.map((reason) => (
            <div key={reason.title} className="why-us-card">
              <div className="why-us-icon">
                <reason.icon size={24} />
              </div>
              <div>
                <h3 className="why-us-title">{reason.title}</h3>
                <p className="why-us-description">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
