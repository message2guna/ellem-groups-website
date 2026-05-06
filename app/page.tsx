import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CompanyCard from '@/components/CompanyCard'
import Link from 'next/link'
import '@/styles/globals.css'
import '@/styles/navbar.css'
import '@/styles/hero.css'
import '@/styles/cards.css'
import '@/styles/footer.css'
import '@/styles/components.css'
import '@/styles/products.css'

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container hero-content">
          <h1>Ellem Groups</h1>
          <p>Excellence in Foundry, Precision Engineering & Fluid Control</p>
          <div className="hero-buttons">
            <Link href="#companies" className="btn btn-primary">
              Explore Companies
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="companies">
        <div className="container">
          <div className="section-title">
            <h2>Our Companies</h2>
            <p>Three specialized units delivering excellence in manufacturing</p>
          </div>
          <div className="companies-grid">
            <CompanyCard
              title="Ellem Foundry"
              description="Specialized in die casting and foundry operations. Producing high-quality castings with precision and reliability for industrial applications."
              link="/foundry"
            />
            <CompanyCard
              title="Ellem Engineering"
              description="Precision manufacturing with CNC machines including turning, VMC, and VTL. Expert in material precision and tight tolerances."
              link="/engineering"
            />
            <CompanyCard
              title="Fluid Control Valves"
              description="Assembly and testing of complete valves with dispatch-ready quality. Ensuring optimal performance in every valve we deliver."
              link="/fluid-control"
            />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Our Product Range</h2>
            <p>Comprehensive catalog of valves, components, and specialized products</p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary)' }}>🔧</h3>
              <h4>Fluid Control Valves</h4>
              <p>10+ types of precision valves including gauge, ball, butterfly, globe, check, and pressure relief valves</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary)' }}>⚙️</h3>
              <h4>Valve Components</h4>
              <p>Essential components including bodies, stems, seat rings, flanges, and guide bushes</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary)' }}>🏭</h3>
              <h4>Specialized Components</h4>
              <p>Textile components, power tiller parts, and automobile components for diverse applications</p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/products" className="btn btn-primary">
              View Complete Catalog
            </Link>
          </div>
        </div>
      </section>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary)' }}>🏭</h3>
              <h4>Advanced Manufacturing</h4>
              <p>State-of-the-art equipment and technology for precision production</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary)' }}>✓</h3>
              <h4>Quality Assurance</h4>
              <p>Rigorous testing and quality control at every step</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary)' }}>🌍</h3>
              <h4>Global Standards</h4>
              <p>Meeting international quality and compliance requirements</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary)' }}>👥</h3>
              <h4>Expert Team</h4>
              <p>Experienced professionals with decades of industry expertise</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary)' }}>⚡</h3>
              <h4>Quick Delivery</h4>
              <p>Efficient production and reliable delivery schedules</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary)' }}>💼</h3>
              <h4>Customer Focus</h4>
              <p>Dedicated support and customized solutions for your needs</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
