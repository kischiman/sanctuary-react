import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import { useState } from 'react'

export default function Home() {
  const [activeTooltip, setActiveTooltip] = useState(null)

  const handleTooltipToggle = (id) => {
    setActiveTooltip(activeTooltip === id ? null : id)
  }

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <hr className="hero-rule" />
        <div className="hero-volume">
          <span>Cosmo-Local Research Lab</span>
          <span>Est. 2024</span>
        </div>
        <h1>
          You're creating socio-technical infrastructure<sup onClick={() => handleTooltipToggle('footnote-1')} className="clickable-footnote">1</sup>. Come to a place that helps you make it last.
        </h1>
        <p className="hero-subtitle">
          A cosmo-local<sup onClick={() => handleTooltipToggle('footnote-2')} className="clickable-footnote">2</sup> research lab for founders and creators, building tools at the intersection of social systems and technology.
        </p>
      </div>

      {/* RESEARCH */}
      <section className="section-wrap" id="research">
        <hr className="rule" />
        <FadeIn className="two-col">
          <div className="sidebar-label">01 — Research</div>
          <div className="content">
            <h2>Learn from our free monthly research publication</h2>
            <p>
              How can AI and web3 technology be used to improve our social fabric? Dig deep into projects and hypotheses that fuel our curiosity. Monthly updates with deep-dives on what we've learned, how it works, and how to get involved.
            </p>
            <a href="#" className="section-link">Subscribe to our Research Reports →</a>
          </div>
        </FadeIn>
      </section>

      {/* ACCOUNTABILITY */}
      <section className="section-wrap" id="accountability">
        <hr className="rule" />
        <FadeIn className="two-col">
          <div className="sidebar-label">02 — Accountability</div>
          <div className="content">
            <h2>Accelerate your progress and get accountability</h2>
            <p>
              Share your progress in facilitated weekly feedback rounds to refine your concepts, find users and value-aligned collaborators. Each session is a small group of 3–4 members, with structured rounds where you present progress, get critique, and leave with clear next steps.
            </p>
            <Link to="/membership" className="section-link">Become a Citizen of Sanctuary →</Link>
          </div>
        </FadeIn>
      </section>

      {/* TESTIMONIALS — first pair */}
      <section className="section-wrap">
        <hr className="rule" />
        <FadeIn className="quotes-row two">
          <blockquote>"I feel support with whatever project I want to work on and get honest feedback."</blockquote>
          <blockquote>"It allows for deliberate experimentation with new ideas without expectation."</blockquote>
        </FadeIn>
      </section>

      {/* RESIDENCY */}
      <section className="section-wrap" id="residency">
        <hr className="rule" />
        <FadeIn className="two-col" style={{ paddingBottom: '1.5rem' }}>
          <div className="sidebar-label">03 — Residency</div>
          <div className="content">
            <h2>Visit a Sanctuary — a curated co-living space where health, nature, and deep collaborative innovation are integrated by design</h2>
          </div>
        </FadeIn>
        <FadeIn className="residency-card">
          <p>
            A "rolling residency" with continuous monthly access in various locations. Designed to help you research and develop your project, go on adventures with peers, and improve your health in nature.
          </p>
          <div className="location-tags">
            <span className="location-tag">Thailand</span>
            <span className="location-tag">Spain</span>
            <span className="location-tag">Portugal</span>
            <span className="location-tag">+ More</span>
          </div>
          <a href="#" className="section-link">Explore our Residency Chapters →</a>
        </FadeIn>
      </section>

      {/* TESTIMONIALS — second set */}
      <section className="section-wrap">
        <hr className="rule" />
        <FadeIn className="quotes-row three">
          <blockquote>"We treat wellness as part of the system."</blockquote>
          <blockquote>"Wild ride, learning connection and growth."</blockquote>
          <blockquote>"A deep breathing exercise for your productive intentions."</blockquote>
        </FadeIn>
      </section>

      {/* TOOLTIPS */}
      {activeTooltip === 'footnote-1' && (
        <div className="tooltip-overlay" onClick={() => setActiveTooltip(null)}>
          <div className="tooltip-content" onClick={e => e.stopPropagation()}>
            <button className="tooltip-close" onClick={() => setActiveTooltip(null)}>×</button>
            <p><strong>Socio-technical infrastructure</strong> refers to the interdependent relationship between the <strong>social systems</strong> (people, rules, and culture) and the <strong>technical systems</strong> (technology and infrastructure) of a society.</p>
          </div>
        </div>
      )}
      
      {activeTooltip === 'footnote-2' && (
        <div className="tooltip-overlay" onClick={() => setActiveTooltip(null)}>
          <div className="tooltip-content" onClick={e => e.stopPropagation()}>
            <button className="tooltip-close" onClick={() => setActiveTooltip(null)}>×</button>
            <p>In very basic terms <strong>cosmo-localism</strong> describes the dynamic potentials of our emerging globally distributed knowledge and design commons in conjunction with the emerging (high and low tech) capacity for localized production of value.</p>
          </div>
        </div>
      )}
    </>
  )
}
