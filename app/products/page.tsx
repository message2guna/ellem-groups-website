import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'

export const metadata = {
  title: 'Products - Ellem Groups | Valves & Components',
  description:
    'Browse our complete range of fluid control valves and components including gauge valves, ball valves, butterfly valves, and more.',
}

const products = {
  'Fluid Control Valves': [
    { name: 'Gauge Valves', description: 'Precision gauge valves for accurate measurement and control' },
    { name: 'Ball Valve', description: 'Durable ball valves for reliable flow control' },
    { name: 'Butterfly Valve', description: 'High-performance butterfly valves for various applications' },
    { name: 'Globe Valve', description: 'Precision globe valves for throttling applications' },
    { name: 'Check Valve', description: 'Non-return check valves for system protection' },
    { name: 'Pressure Relief Valves', description: 'Standard pressure relief valves for system safety' },
    { name: 'Pressure Relief Valves Series 3000', description: 'Professional series pressure relief valves' },
    { name: 'Pressure Relief Valves Series 6000', description: 'Premium series pressure relief valves' },
    { name: 'Pipe Line Valves', description: 'Heavy-duty pipeline valves for industrial use' },
    { name: 'Resilient Seated Gate Valves', description: 'High-performance gate valves with resilient seats' },
  ],
  'Valve Components': [
    { name: 'Gate Valve Body', description: 'Precision-machined gate valve bodies' },
    { name: 'Plug Valve Body', description: 'High-quality plug valve bodies' },
    { name: 'Safety Valve Body', description: 'Engineered safety valve bodies' },
    { name: 'Rising Stem with Outside Screw & Yoke', description: 'Professional valve stems' },
    { name: 'Rising Stem with Inside Screw', description: 'Compact valve stem design' },
    { name: 'Non-Rising Stem with Inside Screw', description: 'Space-efficient stem components' },
    { name: 'Sliding Stem', description: 'Precision sliding stem components' },
    { name: 'Rotary Stem', description: 'Rotary stem for butterfly and ball valves' },
    { name: 'Seat Ring', description: 'High-precision seat rings for optimal sealing' },
    { name: 'Flange', description: 'Standard and custom flanges for valve assembly' },
    { name: 'Guide Bush', description: 'Precision guide bushes for valve alignment' },
  ],
  'Textile Components': [
    { name: 'Textile Components', description: 'High-quality components for textile industry applications' },
  ],
  'Power Tiller Components': [
    { name: 'Power Tiller Components', description: 'Precision-engineered components for power tillers' },
  ],
  'Automobile Components': [
    { name: 'Automobile Components', description: 'Specialized components for automotive applications' },
  ],
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container hero-content">
          <h1>Our Products</h1>
          <p>Comprehensive range of fluid control valves and precision components</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Product Catalog</h2>
            <p>Explore our complete range of products across all categories</p>
          </div>

          {Object.entries(products).map(([category, items]) => (
            <div key={category} style={{ marginBottom: '4rem' }}>
              <h3
                style={{
                  color: 'var(--primary)',
                  borderBottom: '3px solid var(--secondary)',
                  paddingBottom: '1rem',
                  marginBottom: '2rem',
                }}
              >
                {category}
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '2rem',
                  marginBottom: '3rem',
                }}
              >
                {items.map((product) => (
                  <ProductCard
                    key={product.name}
                    name={product.name}
                    category={category}
                    description={product.description}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Our Products?</h2>
            <p>Quality, reliability, and excellence in every component</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-white)',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4 style={{ color: 'var(--primary)', marginTop: 0 }}>
                ✓ ISO Certified
              </h4>
              <p>All products manufactured under strict ISO 9001 standards</p>
            </div>

            <div
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-white)',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4 style={{ color: 'var(--primary)', marginTop: 0 }}>
                ✓ Precision Engineering
              </h4>
              <p>CNC machines ensure perfect tolerances and quality</p>
            </div>

            <div
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-white)',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4 style={{ color: 'var(--primary)', marginTop: 0 }}>
                ✓ Tested & Verified
              </h4>
              <p>Every product undergoes rigorous testing before dispatch</p>
            </div>

            <div
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-white)',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4 style={{ color: 'var(--primary)', marginTop: 0 }}>
                ✓ Custom Solutions
              </h4>
              <p>We provide tailored products for specific requirements</p>
            </div>

            <div
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-white)',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4 style={{ color: 'var(--primary)', marginTop: 0 }}>
                ✓ Fast Delivery
              </h4>
              <p>Efficient production and reliable delivery schedules</p>
            </div>

            <div
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-white)',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4 style={{ color: 'var(--primary)', marginTop: 0 }}>
                ✓ Expert Support
              </h4>
              <p>Dedicated technical support for all your needs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Request Specifications</h2>
            <p>Need detailed product specifications or samples?</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '2rem' }}>
              Contact our sales team for detailed catalogs, specifications,
              <br />
              samples, or to discuss custom requirements.
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--primary)',
                color: 'var(--bg-white)',
                padding: '1rem 2rem',
                borderRadius: '4px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--secondary)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Contact Sales Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
