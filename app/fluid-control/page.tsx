import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Fluid Control Valves - Assembly & Testing',
  description:
    'Assembly and testing of complete valves with dispatch-ready quality. Ensuring optimal performance in every valve.',
}

export default function FluidControlPage() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container hero-content">
          <h1>Fluid Control Valves</h1>
          <p>Complete Valve Assembly & Quality Testing</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>About Fluid Control Valves</h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <h3>Complete Valve Solutions</h3>
              <p>
                Fluid Control Valves specializes in the assembly and testing of complete
                valves. Every valve is thoroughly tested and inspected before dispatch,
                ensuring maximum reliability and performance for our customers.
              </p>
              
              <h3>Our Location</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                <strong>Sree Maruthi Industrial Estate</strong>
                <br />
                S.F.No.99/2, 21/6, School Road
                <br />
                Chinnavedampatti (PO)
                <br />
                Coimbatore - 641049
              </p>
              
              <h3>Our Services</h3>
              <ul
                style={{
                  listStyle: 'none',
                  paddingLeft: 0,
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>✓ Valve assembly</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Pressure testing</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Functional testing</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Leak detection</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Dispatch ready valves</li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: 'var(--bg-light)',
                padding: '2rem',
                borderRadius: '8px',
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-light)',
              }}
            >
              [Fluid Control Image Placeholder - Replace with actual image]
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Quality Assurance Process</h2>
            <p>Every valve meets our stringent quality standards</p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4>📋 Component Inspection</h4>
              <p>Rigorous inspection of all incoming components</p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4>🔧 Expert Assembly</h4>
              <p>Skilled technicians perform precise assembly operations</p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4>⚡ Pressure Testing</h4>
              <p>Comprehensive pressure testing to specifications</p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4>🔍 Leak Detection</h4>
              <p>Advanced leak detection to ensure zero defects</p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4>📦 Dispatch Ready</h4>
              <p>Final packaging and quality certification</p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4>📊 Documentation</h4>
              <p>Complete test reports and compliance documentation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>View our valve assembly and testing facilities</p>
          </div>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="gallery-item">
                <div
                  style={{
                    backgroundColor: 'var(--bg-light)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  [Image {i}]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
