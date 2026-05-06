import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ellem Foundry - Die Casting & Foundry Operations',
  description:
    'Specialized in die casting and foundry operations. Producing high-quality castings with precision and reliability.',
}

export default function FoundryPage() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container hero-content">
          <h1>Ellem Foundry</h1>
          <p>Excellence in Die Casting & Foundry Operations</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>About Ellem Foundry</h2>
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
              <h3>Die Casting Excellence</h3>
              <p>
                Ellem Foundry specializes in die casting and basic foundry operations,
                producing high-quality castings that meet international standards. Our
                expertise spans various industries and applications.
              </p>
              <h3>Our Location</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                <strong>Cosmafun Foundry</strong>
                <br />
                S.F.No.505, Site no. 55D, Door no.3/282/1
                <br />
                Cluster Park-1, Arasur West
                <br />
                Coimbatore - 641407
              </p>
              
              <h3>Our Services</h3>
              <ul
                style={{
                  listStyle: 'none',
                  paddingLeft: 0,
                }}
              >
                <li style={{ marginBottom: '0.5rem' }}>
                  ✓ Aluminum and zinc die casting
                </li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Precision mold design</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Quality control</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Finishing services</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Custom casting solutions</li>
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
              [Foundry Image Placeholder - Replace with actual image]
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Capabilities</h2>
            <p>State-of-the-art equipment and expertise</p>
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
              <h4>Die Casting Machines</h4>
              <p>Modern, high-pressure die casting machines for consistent quality</p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4>Quality Testing</h4>
              <p>Comprehensive testing and inspection facilities</p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4>Skilled Team</h4>
              <p>Experienced operators and engineers with deep foundry expertise</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>View our products and facilities</p>
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
