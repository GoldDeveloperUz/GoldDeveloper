import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import Footer from '../components/Footer'
import './Contact.css'

const IcPhone = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.16 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
const IcMail = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
const IcGH = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
const IcMap = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
const IcSend = () => <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>

export default function Contact() {
  useReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSent(true)
      setLoading(false)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    }, 1300)
  }

  const contacts = [
    { icon: <IcPhone />, label: 'Phone', value: <a href="tel:+998937047270">+998 93 704 72 70</a> },
    { icon: <IcMail />, label: 'Email', value: <a href="mailto:ataullayevtimurbek@gmail.com">ataullayevtimurbek@gmail.com</a> },
    { icon: <IcGH />, label: 'GitHub', value: <a href="https://github.com/GoldDeveloperUz" target="_blank" rel="noreferrer">GoldDeveloperUz</a> },
    { icon: <IcMap />, label: 'Location', value: 'Navoi, Uzbekistan' },
  ]

  return (
    <main className="pt68">
      <section>
        <div className="wrap">
          <div className="reveal">
            <p className="sec-label">Get in Touch</p>
            <h2 className="sec-title">Let's Work Together</h2>
            <p className="sec-sub">Have a project in mind? I'd love to hear about it. Let's create something amazing.</p>
          </div>

          <div className="contact-grid">
            {/* Info */}
            <div className="reveal">
              <div className="ci-title">Contact Information</div>
              {contacts.map((c, i) => (
                <div key={i} className="ci-item">
                  <div className="ci-icon">{c.icon}</div>
                  <div>
                    <div className="ci-lbl">{c.label}</div>
                    <div className="ci-val">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="reveal">
              <form className="cform" onSubmit={handleSubmit}>
                <div className="fgrp">
                  <label className="flbl">Your Name</label>
                  <input className="finp" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="fgrp">
                  <label className="flbl">Email Address</label>
                  <input className="finp" type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
                <div className="fgrp">
                  <label className="flbl">Subject</label>
                  <input className="finp" name="subject" value={form.subject} onChange={handleChange} placeholder="Project Collaboration" />
                </div>
                <div className="fgrp">
                  <label className="flbl">Message</label>
                  <textarea className="ftxt" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required />
                </div>
                <button type="submit" className="fsub" disabled={loading}>
                  <IcSend /> {loading ? 'Sending...' : 'Send Message'}
                </button>
                {sent && (
                  <div className="fsuc">✓ Message sent! I'll get back to you soon.</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
