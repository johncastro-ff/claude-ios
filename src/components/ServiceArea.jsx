import { MapPin } from 'lucide-react'
import './ServiceArea.css'

const areas = [
  'Stillwater',
  'Perkins',
  'Glencoe',
  'Ripley',
  'Yale',
  'Cushing',
  'Perry',
  'Morrison',
]

function ServiceArea() {
  return (
    <section id="service-area" className="service-area section">
      <div className="container">
        <div className="service-area-header">
          <p className="section-label">Service Area</p>
          <h2 className="section-title">Proudly Serving Stillwater & Beyond</h2>
          <p className="section-subtitle">
            Based in Stillwater, OK, we provide HVAC services to homes and
            businesses throughout Payne County and surrounding communities.
          </p>
        </div>

        <div className="area-tags">
          {areas.map((area) => (
            <div key={area} className="area-tag">
              <MapPin size={16} />
              {area}
            </div>
          ))}
        </div>

        <div className="area-cta">
          <p className="area-cta-text">
            Don&apos;t see your area? Give us a call — we may still be able to help!
          </p>
          <a href="tel:+14055551234" className="btn btn-outline">
            Call (405) 555-1234
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServiceArea
