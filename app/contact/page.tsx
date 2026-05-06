import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Ellem Groups',
  description: 'Get in touch with Ellem Groups for inquiries, quotes, or partnerships.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Get in Touch</h2>
            <p>Reach out to us for inquiries, quotes, or partnerships</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              marginBottom: '3rem',
            }}
          >
            <div>
              <h3 style={{ color: 'var(--primary)' }}>Contact Information</h3>

              <div style={{ marginBottom: '2rem' }}>
                <h4>Ellem Foundry</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  <strong>Location:</strong>
                  <br />
                  S.F.No.505, Site no. 55D, Door no.3/282/1
                  <br />
                  Cosmafun Foundry, Cluster Park-1
                  <br />
                  Arasur West, Coimbatore - 641407
                  <br />
                  <br />
                  <strong>Contact:</strong>
                  <br />
                  Phone: Available on request
                  <br />
                  Email: Contact us for details
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h4>Ellem Engineering</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  <strong>Location:</strong>
                  <br />
                  S.F.No.99/2A, 21/6
                  <br />
                  Sree Maruthi Industrial Estate
                  <br />
                  School Road, Chinnavedampatti (Post)
                  <br />
                  Coimbatore - 641 049
                  <br />
                  <br />
                  <strong>Contact:</strong>
                  <br />
                  📱 +91 98430 52005
                  <br />
                  📱 +91 98431 52005
                  <br />
                  📧 fcv@ellemengineering.com
                  <br />
                  📧 sales@ellemengineering.com
                  <br />
                  📧 production@ellemengineering.com
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h4>Fluid Control Valves & Components</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  <strong>Location:</strong>
                  <br />
                  S.F.No.99/2, 21/6
                  <br />
                  Sree Maruthi Industrial Estate
                  <br />
                  School Road, Chinnavedampatti (PO)
                  <br />
                  Coimbatore - 641049
                  <br />
                  <br />
                  <strong>Contact:</strong>
                  <br />
                  Phone: Available on request
                  <br />
                  Email: Contact us for details
                </p>
              </div>

              <div>
                <h4>Corporate Office</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  <strong>Ellem Groups</strong>
                  <br />
                  Coimbatore, India
                  <br />
                  <br />
                  For general inquiries or partnerships,
                  <br />
                  please use the contact form or reach out
                  <br />
                  to any of our division offices above.
                </p>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Business Hours</h2>
          </div>
          <div
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <p>
              <strong>Monday to Friday:</strong> 9:00 AM - 6:00 PM
              <br />
              <strong>Saturday:</strong> 10:00 AM - 2:00 PM
              <br />
              <strong>Sunday:</strong> Closed
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
