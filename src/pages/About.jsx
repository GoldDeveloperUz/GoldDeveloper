import { useReveal } from '../hooks/useReveal'
import Footer from '../components/Footer'
import './About.css'

export default function About() {
  useReveal()
  return (
    <main className="pt68">
      <section style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <div className="about-grid">
            {/* Card */}
            <div className="reveal">
              <div className="about-card">
                <div className="av-wrap">
                  <div className="av-circle">
                    <span className="av-init">T</span>
                  </div>
                </div>
                <div className="about-stats">
                  {[['2+','Years Exp'],['10+','Projects'],['3','Languages'],['10+','Technologies']].map(([n,l]) => (
                    <div key={l} className="stat">
                      <div className="stat-n">{n}</div>
                      <div className="stat-l">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="reveal">
              <p className="sec-label">About Me</p>
              <h2 className="sec-title">Passionate about<br />building great things</h2>
              <p className="about-p">
                Hi, I'm <strong>Timurbek Ataullayev</strong>, a dedicated Front-End Developer based in{' '}
                <strong>Navoi, Uzbekistan</strong>. I specialize in building modern, responsive, and
                user-friendly web applications that combine clean code with thoughtful design.
              </p>
              <p className="about-p">
                I enjoy turning complex problems into simple, beautiful, and intuitive interfaces.
                When I'm not coding, I'm exploring new technologies, sharpening my UI/UX skills,
                and contributing to projects that make a real difference.
              </p>
              <p className="about-p">
                My approach is rooted in <strong>performance</strong>, <strong>accessibility</strong>,
                and deep attention to detail — because great experiences live at the intersection
                of design and engineering.
              </p>
              <div className="about-info">
                {[
                  ['Location', '📍 Navoi, Uzbekistan'],
                  ['Phone', <a key="ph" href="tel:+998937047270">+998 93 704 72 70</a>],
                  ['Email', <a key="em" href="mailto:ataullayevtimurbek@gmail.com">ataullayevtimurbek@gmail.com</a>],
                  ['GitHub', <a key="gh" href="https://github.com/GoldDeveloperUz" target="_blank" rel="noreferrer">GoldDeveloperUz</a>],
                  ['Status', <span key="st" style={{ color: 'var(--green)' }}>● Available for opportunities</span>],
                ].map(([k, v]) => (
                  <div key={k} className="info-row">
                    <span className="info-k">{k}</span>
                    <span className="info-v">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
