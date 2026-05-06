import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Ellem Groups',
  description: 'Learn about Ellem Groups and our commitment to manufacturing excellence.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container hero-content">
          <h1>About Ellem Groups</h1>
          <p>Engineered for Excellence</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Story</h2>
          </div>
          <p>
            Ellem Groups is a leading manufacturing conglomerate with three specialized
            divisions, each dedicated to delivering excellence in their respective fields.
            From foundry operations to precision engineering and fluid control solutions,
            we serve clients globally with unwavering commitment to quality and reliability.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Our Mission</h2>
          </div>
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              To deliver exceptional manufacturing solutions through innovative technology,
              skilled expertise, and unwavering commitment to quality. We aim to be the
              trusted partner for our clients' most critical manufacturing needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
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
                backgroundColor: 'var(--bg-light)',
                borderRadius: '8px',
                borderLeft: '4px solid var(--secondary)',
              }}
            >
              <h4 style={{ color: 'var(--primary)' }}>Quality First</h4>
              <p>
                We never compromise on quality. Every product meets international standards.
              </p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-light)',
                borderRadius: '8px',
                borderLeft: '4px solid var(--secondary)',
              }}
            >
              <h4 style={{ color: 'var(--primary)' }}>Innovation</h4>
              <p>
                Continuous improvement and adoption of advanced technologies.
              </p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-light)',
                borderRadius: '8px',
                borderLeft: '4px solid var(--secondary)',
              }}
            >
              <h4 style={{ color: 'var(--primary)' }}>Customer Focus</h4>
              <p>
                Your success is our success. We listen and deliver customized solutions.
              </p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-light)',
                borderRadius: '8px',
                borderLeft: '4px solid var(--secondary)',
              }}
            >
              <h4 style={{ color: 'var(--primary)' }}>Expertise</h4>
              <p>
                Decades of experience combined with a dedicated team of professionals.
              </p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-light)',
                borderRadius: '8px',
                borderLeft: '4px solid var(--secondary)',
              }}
            >
              <h4 style={{ color: 'var(--primary)' }}>Reliability</h4>
              <p>
                Consistent delivery and trustworthy partnerships since day one.
              </p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-light)',
                borderRadius: '8px',
                borderLeft: '4px solid var(--secondary)',
              }}
            >
              <h4 style={{ color: 'var(--primary)' }}>Sustainability</h4>
              <p>
                Responsible manufacturing with environmental consciousness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
