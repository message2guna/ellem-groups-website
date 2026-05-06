import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ellem Engineering - Precision CNC Manufacturing',
  description:
    'Precision manufacturing with CNC machines including turning, VMC, and VTL. Expert in material precision and tight tolerances.',
}

export default function EngineeringPage() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container hero-content">
          <h1>Ellem Engineering</h1>
          <p>Precision Manufacturing with Advanced CNC Technology</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>About Ellem Engineering</h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
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
              [Engineering Image Placeholder - Replace with actual image]
            </div>
            <div>
              <h3>Precision Engineering Excellence</h3>
              <p>
                Ellem Engineering specializes in precision manufacturing with
                state-of-the-art CNC machines. We focus on delivering products with
                exceptional precision and tight tolerances for demanding applications.
              </p>
              <h3>Our Services</h3>
              <ul
                style={{
                  listStyle: 'none',
                  paddingLeft: 0,
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>✓ CNC Turning operations</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ VMC (Vertical Machining Center)</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ VTL (Vertical Turning Lathe)</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Precision components</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Custom manufacturing solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Technology & Capabilities</h2>
            <p>Advanced machinery for exceptional precision</p>
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
              <h4>CNC Turning Centers</h4>
              <p>Multi-axis CNC lathes for complex turning operations</p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4>Vertical Machining Centers (VMC)</h4>
              <p>High-precision milling for intricate components</p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4>Vertical Turning Lathes (VTL)</h4>
              <p>Heavy-duty machining for large diameter components</p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4>Material Precision</h4>
              <p>Expert handling of various materials with tight tolerances</p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4>Quality Control</h4>
              <p>CMM and precision inspection equipment</p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4>Rapid Prototyping</h4>
              <p>Quick turnaround for prototype and sample manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>View our precision components and facilities</p>
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
