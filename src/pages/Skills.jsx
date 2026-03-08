import { useReveal } from '../hooks/useReveal'
import { SkillIcon } from '../components/SkillIcons'
import Footer from '../components/Footer'
import { SKILLS } from '../data'
import './Skills.css'

export default function Skills() {
  useReveal()
  return (
    <main className="pt68">
      <section>
        <div className="wrap">
          <div className="reveal">
            <p className="sec-label">My Stack</p>
            <h2 className="sec-title">Skills & Technologies</h2>
            <p className="sec-sub">Technologies I use to build modern, performant web applications.</p>
          </div>
          <div className="skills-grid-full">
            {SKILLS.map((s, i) => (
              <div key={i} className="skill-card-lg reveal">
                <div className="skill-ico-lg"><SkillIcon name={s.key} /></div>
                <span className="skill-nm-lg">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
