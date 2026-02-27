import { Scan } from 'lucide-react'
import './ServiceArea.css'

const treatments = [
  'Morpheus8',
  'CoolSculpting Elite',
  'Stellar M22 / IPL',
  'Sciton BBL / MOXI',
  'Sofwave',
  'EmSculpt NEO',
  'Potenza RF',
  'HydraFacial',
  'Botox & Fillers',
  'Laser Resurfacing',
  'Chemical Peels',
  'PRP Therapy',
]

function ServiceArea() {
  return (
    <section id="treatments" className="service-area section">
      <div className="container">
        <div className="service-area-header">
          <p className="section-label">Treatments We Advertise</p>
          <h2 className="section-title">We Speak Your Language</h2>
          <p className="section-subtitle">
            We specialize in advertising high-ticket aesthetic treatments.
            We understand the equipment, the patient journey, and how to
            position each procedure for maximum conversions.
          </p>
        </div>

        <div className="area-tags">
          {treatments.map((treatment) => (
            <div key={treatment} className="area-tag">
              <Scan size={16} />
              {treatment}
            </div>
          ))}
        </div>

        <div className="area-cta">
          <p className="area-cta-text">
            Don&apos;t see your treatment? We can build campaigns for any
            advanced aesthetic procedure. Let&apos;s talk.
          </p>
          <a href="#contact" className="btn btn-outline">
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServiceArea
