import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main style={{
      paddingTop: '68px',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <div style={{
        fontFamily: 'var(--fd)',
        fontSize: 'clamp(5rem,15vw,10rem)',
        fontWeight: 800,
        background: 'linear-gradient(130deg,var(--cyan),var(--green))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1,
      }}>404</div>
      <p style={{ fontFamily: 'var(--fm)', color: 'var(--txt2)', marginBottom: '1.5rem' }}>
        // Page not found
      </p>
      <Link to="/" className="btn-p">← Go Home</Link>
    </main>
  )
}
