export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h4>Ellem Groups</h4>
          <p>
            Leading manufacturing excellence across foundry, precision engineering,
            and fluid control solutions.
          </p>
        </div>
        <div className="footer-section">
          <h4>Companies</h4>
          <ul>
            <li>
              <a href="/foundry">Ellem Foundry</a>
            </li>
            <li>
              <a href="/engineering">Ellem Engineering</a>
            </li>
            <li>
              <a href="/fluid-control">Fluid Control Valves</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p style={{ fontSize: '0.9rem' }}>
            <strong>Ellem Engineering:</strong>
            <br />
            📱 +91 98430 52005
            <br />
            📱 +91 98431 52005
            <br />
            📧 fcv@ellemengineering.com
          </p>
          <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
            <strong>Location:</strong>
            <br />
            Coimbatore, India
          </p>
          <div className="social-links" style={{ marginTop: '1rem' }}>
            <a href="https://linkedin.com" title="LinkedIn">
              in
            </a>
            <a href="https://facebook.com" title="Facebook">
              f
            </a>
            <a href="https://instagram.com" title="Instagram">
              @
            </a>
          </div>
        </div>
      </div>
      <div className="footer-divider">
        <div className="footer-bottom">
          <p>&copy; 2026 Ellem Groups. All rights reserved.</p>
          <p>Engineered for Excellence</p>
        </div>
      </div>
    </footer>
  )
}
