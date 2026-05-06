'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link href="/" className="navbar-logo">
          ELLEM
        </Link>
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/foundry" onClick={() => setMenuOpen(false)}>
              Foundry
            </Link>
          </li>
          <li>
            <Link href="/engineering" onClick={() => setMenuOpen(false)}>
              Engineering
            </Link>
          </li>
          <li>
            <Link href="/fluid-control" onClick={() => setMenuOpen(false)}>
              Fluid Control
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
