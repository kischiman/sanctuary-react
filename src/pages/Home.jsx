import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import FadeIn from '../components/FadeIn'

export default function Home() {
  const featuredProjects = ['Compass', 'Moxa', 'Punto']

  useEffect(() => {
    // Ensure page starts at the top on load only
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <hr className="hero-rule" />
        <div className="hero-volume">
        </div>
        <h1>Sanctuary</h1>
        <p className="hero-subtitle">
        A curated network of physical spaces for value-aligned product builders and ecosystem developers
        </p>
      </div>

      {/* COMMUNITY */}
      <section className="section-wrap" id="connect">
        <hr className="rule" />
        <FadeIn className="two-col">
          <div className="sidebar-label">01 — Community</div>
          <div className="content">
            <h2>Make tangible progress alongside a curated community</h2>
            <p>
              Our high-signal, low-noise collective combines the emotional safety of a close-knit collective with the strategic opportunities of a professional network.
            </p>
            <Link to="/join" className="section-link">Join us on Telegram →</Link>
          </div>
        </FadeIn>
      </section>

      {/* BUILD */}
      <section className="section-wrap" id="build">
        <hr className="rule" />
        <FadeIn className="two-col">
          <div className="sidebar-label">02 — Build</div>
          <div className="content">
            <h2>Find product-market fit in a decentralised economy</h2>
            <p>
              Through online sessions, IRL events, and peer accountability, you validate your product and find a clear path to your market. Move through the blockers that have been sitting in your queue for months and always leave with clear next steps.
            </p>
            <div className="featured-projects-grid">
              {featuredProjects.map((project) => (
                <div
                  key={project}
                  className="featured-project-card"
                >
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '11px', fontWeight: '500', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--mid)' }}>
                    Project
                  </div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '1.15rem', fontWeight: '500', color: 'var(--dark)' }}>
                    {project}
                  </div>
                </div>
              ))}
            </div>
            <Link to="/join" className="section-link">Sign up to an online session →</Link>
          </div>
        </FadeIn>
      </section>

      {/* RESEARCH LAB */}
      <section className="section-wrap" id="research-lab" style={{ position: 'relative', zIndex: 1 }}>
        <hr className="rule" />
        <FadeIn className="two-col">
          <div className="sidebar-label">03 — Environments</div>
          <div className="content">
            <h2>Build with your ideal users in healthy environments</h2>
            <p>
              A safe space to balance nature and technological innovation. Co-live with a curated group of experts, get direct access to your target audiences, and apply bespoke protocols to reach your health goals. Our network of physical hubs acts an innovation lab for how environment, protocols, and technologies can accelerate socio-technical innovation.
            </p>
            <Link to="/container" className="section-link">Learn more →</Link>
            <img src="/co-living-sunset-clean.jpg" alt="Modern co-living space with large windows showing people working together inside, surrounded by mountains at sunset" style={{ width: '100%', borderRadius: '8px', margin: '2rem 0' }} />
          </div>
        </FadeIn>
      </section>
      {/* TESTIMONIALS — first pair */}
      <section className="section-wrap">
        <hr className="rule" />
        <FadeIn className="quotes-row two">
          <blockquote>"I feel support with whatever project I want to work on and get honest feedback." - Justina</blockquote>
          <blockquote>"The Sanctuary community's feedback has been instrumental in shaping my app — from design consistency to the finer details I wouldn't have caught on my own. The app side is nearly done, and I feel confident in it largely thanks to the notes and input I've received here." - Stacey</blockquote>
        </FadeIn>
      </section>

    </>
  )
}
