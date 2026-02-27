import { Check, CalendarCheck } from 'lucide-react'
import './Pricing.css'

const tiers = [
  {
    name: 'Growth',
    price: '$2,500',
    period: '/mo',
    description: 'For single-provider practices ready to start filling their calendar.',
    features: [
      '1 treatment focus campaign',
      '4 ad creatives per month',
      'Full campaign management',
      'Retargeting setup',
      'Monthly performance report',
      'Dedicated Slack channel',
    ],
    highlighted: false,
  },
  {
    name: 'Scale',
    price: '$5,000',
    period: '/mo',
    description: 'For growing practices with multiple treatments and serious growth goals.',
    features: [
      '3 treatment focus campaigns',
      '10 ad creatives per month',
      'Custom landing page',
      'Advanced retargeting funnels',
      'Bi-weekly performance calls',
      'Competitor ad monitoring',
      'A/B testing framework',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$8,000+',
    period: '/mo',
    description: 'For multi-location practices and high-volume med spa groups.',
    features: [
      'Unlimited treatment campaigns',
      'Full creative suite',
      'Multi-location management',
      'Dedicated strategist',
      'Weekly reporting & calls',
      'Custom analytics dashboard',
      'Seasonal campaign planning',
      'Launch day support',
    ],
    highlighted: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="pricing-header">
          <p className="section-label">Investment</p>
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            No hidden fees. No long-term contracts. Just results-driven
            campaigns that pay for themselves.
          </p>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card ${tier.highlighted ? 'pricing-card--highlighted' : ''}`}
            >
              {tier.highlighted && (
                <div className="pricing-badge">Most Popular</div>
              )}
              <h3 className="pricing-name">{tier.name}</h3>
              <div className="pricing-price">
                <span className="pricing-amount">{tier.price}</span>
                <span className="pricing-period">{tier.period}</span>
              </div>
              <p className="pricing-description">{tier.description}</p>

              <ul className="pricing-features">
                {tier.features.map((feature) => (
                  <li key={feature} className="pricing-feature">
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`btn ${tier.highlighted ? 'btn-primary' : 'btn-outline'} pricing-cta`}
              >
                <CalendarCheck size={18} />
                Book Strategy Call
              </a>
            </div>
          ))}
        </div>

        <p className="pricing-note">
          Ad spend is billed separately through your own Meta ad account.
          We recommend a minimum of $2,000/mo in ad spend for meaningful results.
        </p>
      </div>
    </section>
  )
}

export default Pricing
