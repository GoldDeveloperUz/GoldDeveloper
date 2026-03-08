import { useReveal } from '../hooks/useReveal'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import { PROJECTS } from '../data'
import './Projects.css'

export default function Projects() {
  useReveal()
  return (
    <main className="pt68">
      <section>
        <div className="wrap">
          <div className="reveal">
            <p className="sec-label">My Work</p>
            <h2 className="sec-title">All Projects</h2>
            <p className="sec-sub">Every project I've designed and developed — real-world and personal.</p>
          </div>
          <div className="all-proj-grid">
            {PROJECTS.map(p => <ProjectCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
