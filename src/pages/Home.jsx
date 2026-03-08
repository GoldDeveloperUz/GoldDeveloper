import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { SkillIcon } from '../components/SkillIcons'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import { SKILLS, PROJECTS } from '../data'
import './Home.css'

export default function Home() {
  useReveal()

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="orb orb1" /><div className="orb orb2" /><div className="orb orb3" />

        <div className="hero-badges">
          {['⚛ React', '{ } JavaScript', '🎨 CSS3', '⌥ Git'].map((b, i) => (
            <div key={i} className="hbadge" style={{ '--d': `${5 + i * 1.5}s`, '--dl': `${i * 0.3}s` }}>{b}</div>
          ))}
        </div>

        <div className="wrap hero-content">
          <p className="hero-greet">// Hello, World! I'm</p>
          <h1 className="hero-name">
            Timurbek
            <span className="hero-name-g">Ataullayev</span>
          </h1>
          <p className="hero-title">
            <span className="br">&lt;</span>Front-End Developer<span className="br"> /&gt;</span>
          </p>
          <p className="hero-desc">
            Crafting modern, responsive and blazing-fast web experiences.
            Passionate about clean code, thoughtful UI, and pixel-perfect design.
          </p>
          <div className="hero-btns">
            <Link to="/projects" className="btn-p">View Projects →</Link>
            <Link to="/contact" className="btn-o">Contact Me</Link>
          </div>
        </div>

        <div className="scroll-ind">
          <div className="scroll-line" />
          scroll
        </div>
      </section>

      {/* ── SKILLS PREVIEW ── */}
      <section className="skills-sec" style={{ background: 'var(--bg2)' }}>
        <div className="wrap">
          <div className="reveal">
            <p className="sec-label">My Stack</p>
            <h2 className="sec-title">Skills & Technologies</h2>
            <p className="sec-sub">Technologies I work with to build modern, performant web applications.</p>
          </div>
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <div key={i} className="skill-card reveal">
                <div className="skill-ico"><SkillIcon name={s.key} /></div>
                <span className="skill-nm">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS PREVIEW ── */}
      <section>
        <div className="wrap">
          <div className="reveal">
            <p className="sec-label">My Work</p>
            <h2 className="sec-title">Featured Projects</h2>
            <p className="sec-sub">A selection of real-world projects I've designed and developed.</p>
          </div>
          <div className="proj-grid">
            {PROJECTS.slice(0, 2).map(p => <ProjectCard key={p.id} p={p} />)}
          </div>
          <div className="proj-more">
            <Link to="/projects" className="btn-o">See All Projects →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
