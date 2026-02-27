import { Sparkles, ShieldCheck, Zap, TrendingUp } from 'lucide-react'
import './WhyUs.css'

const reasons = [
  {
    icon: Sparkles,
    title: 'Med Spa Specialists',
    description:
      'We only work with aesthetic med spas. Every campaign we build is informed by deep knowledge of treatments, patient psychology, and industry compliance.',
  },
  {
    icon: Zap,
    title: 'AI-Powered Creative',
    description:
      'We use AI tools to research competitors, generate ad variations, and optimize creative at a speed and scale traditional agencies can\'t match.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance-First',
    description:
      'Meta health & beauty policies, HIPAA, FTC guidelines — we build every campaign with compliance baked in so your ads stay live.',
  },
  {
    icon: TrendingUp,
    title: 'ROI Obsessed',
    description:
      'We don\'t chase vanity metrics. Every dollar is tracked from ad impression to booked consultation to treatment revenue. Your ROAS is our scorecard.',
  },
]

function WhyUs() {
  return (
    <section id="why-us" className="why-us section">
      <div className="container">
        <div className="why-us-header">
          <p className="section-label">Why Dandelion</p>
          <h2 className="section-title">The Dandelion Difference</h2>
          <p className="section-subtitle">
            We combine med spa expertise with AI-powered execution to deliver
            results that generic marketing agencies simply cannot.
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
