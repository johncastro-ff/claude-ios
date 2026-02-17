import {
  Snowflake,
  Flame,
  Wrench,
  Wind,
  ShieldCheck,
  Thermometer,
} from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: Snowflake,
    title: 'AC Repair & Installation',
    description:
      'Beat the Oklahoma heat with expert air conditioning repair, replacement, and new system installation.',
  },
  {
    icon: Flame,
    title: 'Heating & Furnace',
    description:
      'Stay warm through frigid winters with furnace repair, heat pump service, and heating system installation.',
  },
  {
    icon: Wrench,
    title: 'Preventive Maintenance',
    description:
      'Extend the life of your HVAC system and avoid costly breakdowns with scheduled tune-ups and inspections.',
  },
  {
    icon: Wind,
    title: 'Indoor Air Quality',
    description:
      'Breathe easier with air purification, duct cleaning, humidity control, and ventilation solutions.',
  },
  {
    icon: ShieldCheck,
    title: 'Emergency Repairs',
    description:
      'HVAC emergency? Our technicians are available 24/7 to restore comfort to your home fast.',
  },
  {
    icon: Thermometer,
    title: 'Thermostat & Controls',
    description:
      'Upgrade to smart thermostats and modern controls for better comfort and lower energy bills.',
  },
]

function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Our HVAC Services</h2>
          <p className="section-subtitle">
            Comprehensive heating, cooling, and air quality solutions for
            residential and commercial properties in Stillwater.
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
