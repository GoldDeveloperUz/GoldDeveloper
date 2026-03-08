import { useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import Footer from '../components/Footer'
import { EDUCATION, LANGUAGES } from '../data'
import './Education.css'

export default function Education() {
  useReveal()

  // Animate language bars
  useEffect(() => {
    const fills = document.querySelectorAll('.lang-fill')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.w
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.5 })
    fills.forEach(f => obs.observe(f))
    return () => obs.disconnect()
  }, [])

  return (
    <main className="pt68">
      {/* Education */}
      <section>
        <div className="wrap">
          <div className="reveal">
            <p className="sec-label">Background</p>
            <h2 className="sec-title">Education</h2>
            <p className="sec-sub">My academic journey and self-learning path in web development.</p>
          </div>
          <div className="timeline reveal">
            {EDUCATION.map((e, i) => (
              <div key={i} className="tl-item">
                <div className="tl-dot" />
                <div className="tl-date">{e.date}</div>
                <div className="tl-title">{e.title}</div>
                <div className="tl-org">{e.org}</div>
                <p className="tl-desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <div className="reveal">
            <p className="sec-label">Communication</p>
            <h2 className="sec-title">Languages</h2>
            <p className="sec-sub">Languages I speak and communicate in professionally.</p>
          </div>
          <div className="lang-grid">
            {LANGUAGES.map((l, i) => (
              <div key={i} className="lang-card reveal">
                <div className="lang-name">{l.flag} {l.name}</div>
                <div className="lang-lvl">{l.level}</div>
                <div className="lang-bar">
                  <div className="lang-fill" data-w={`${l.pct}%`} style={{ width: 0 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
