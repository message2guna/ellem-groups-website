'use client'

import { useState } from 'react'

interface ContactFormProps {
  company?: string
}

export default function ContactForm({ company }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: company || '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields')
      return
    }

    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: company || '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {error && <div className="message error">{error}</div>}
      {submitted && (
        <div className="message success">
          Thank you! We will get back to you soon.
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="form-submit">
        Send Message
      </button>
    </form>
  )
}
