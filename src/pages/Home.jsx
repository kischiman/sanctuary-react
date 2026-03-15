import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import '../styles/profile-cards.css'
import { useState } from 'react'

// Import face images
import justinaFace from '../assets/faces/justina.webp'
import staceyFace from '../assets/faces/stacey.webp'
import jordiFace from '../assets/faces/jordi.webp'
import mattFace from '../assets/faces/matt.webp'
import dayvanFace from '../assets/faces/dayvan.webp'
import annaFace from '../assets/faces/Anna-Square.webp'

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
        </div>
        <h1>
          You're creating socio-technical infrastructure<sup onClick={() => handleTooltipToggle('footnote-1')} className="clickable-footnote">1</sup>. Let's accelerate and make it last.
        </h1>
        <p className="hero-subtitle">
          A cosmo-local<sup onClick={() => handleTooltipToggle('footnote-2')} className="clickable-footnote">2</sup> research incubator for builders, researchers, and designers solving real problems with simple, monetisable products.
        </p>
      </div>

      {/* CONNECT */}
      <section className="section-wrap" id="connect">
        <hr className="rule" />
        <FadeIn className="two-col">
          <div className="sidebar-label">01 — Community</div>
          <div className="content">
            <h2>Make tangible progress alongside a curated community</h2>
            <p>
            Our high-signal, low-noise collective combines the emotional safety of a close-knit collective with the strategic opportunities of a professional network.  
            </p>
            <Link to="/membership" className="section-link">Join the Sanctuary network →</Link>

          </div>
        </FadeIn>
      </section>

      {/* COMMUNITY PROFILES */}
      <section className="profiles" style={{ borderTop: 'none' }}>
        <div className="card-fan">

          {/* Justina */}
          <div className="profile-card">
            <img src={justinaFace} alt="Justina Švitraitė" className="profile-photo" />
            <div className="profile-name">Justina Švitraitė</div>
            <div className="profile-vision">Facilitating a mobile network of cosmo-local communities blending technology and nature</div>
            <div className="profile-valued"><strong>Valued for</strong> — Emotional support and creative collaboration — unblocking projects and keeping the group grounded</div>
            <div className="profile-quest"><strong>Current quest</strong> — Running a living experiment in shared plant stewardship that explores care, ownership, and continuity in nomadic lives</div>
            <div className="profile-skills">
              <span className="profile-skill-tag">Ethnographic research</span>
              <span className="profile-skill-tag">Community building</span>
              <span className="profile-skill-tag">Org design</span>
            </div>
          </div>

          {/* Stacey */}
          <div className="profile-card">
            <img src={staceyFace} alt="Stacey Fronek" className="profile-photo" />
            <div className="profile-name">Stacey Fronek</div>
            <div className="profile-vision">Following her passions and co-creating communities around them — building things that make civilization a more human-friendly system.</div>
            <div className="profile-valued"><strong>Valued for</strong> — Thorough, high-quality feedback and a drive to use the program to its fullest — motivating the whole group</div>
            <div className="profile-quest"><strong>Current quest</strong> — Refining product positioning and brand strategy through rapid peer feedback cycles</div>
            <div className="profile-skills">
              <span className="profile-skill-tag">Marketing</span>
              <span className="profile-skill-tag">Product feedback</span>
              <span className="profile-skill-tag">Brand strategy</span>
            </div>
          </div>

          {/* Jordi */}
          <div className="profile-card">
            <img src={jordiFace} alt="Jordi Pinyana" className="profile-photo" />
            <div className="profile-name">Jordi Pinyana</div>
            <div className="profile-vision">A future of individual and collective freedom — where people have agency to decide what matters to them, work together without barriers, and live connected to nature.</div>
            <div className="profile-valued"><strong>Valued for</strong> — Sharp governance thinking and consistent participation that shaped the group's direction</div>
            <div className="profile-quest"><strong>Current quest</strong> — Building digital voting and governance solutions for decentralized communities</div>
            <div className="profile-skills">
              <span className="profile-skill-tag">Digital voting</span>
              <span className="profile-skill-tag">Governance</span>
              <span className="profile-skill-tag">Smart contracts</span>
            </div>
          </div>

          {/* Matt */}
          <div className="profile-card">
            <img src={mattFace} alt="Matt Shams" className="profile-photo" />
            <div className="profile-name">Matt Shams</div>
            <div className="profile-vision">Designing containers where longevity research and innovation can be replicated at scale</div>
            <div className="profile-valued"><strong>Valued for</strong> — Critical thinking, first-principles feedback, and shaping Sanctuary's economic model with directness</div>
            <div className="profile-quest"><strong>Current quest</strong> — Developing a container spec for Longevity Innovation Zones and replicable research labs</div>
            <div className="profile-skills">
              <span className="profile-skill-tag">Founder support</span>
              <span className="profile-skill-tag">Business strategy</span>
              <span className="profile-skill-tag">Economic modeling</span>
            </div>
          </div>

          {/* Dayvan */}
          <div className="profile-card">
            <img src={dayvanFace} alt="Dayvan" className="profile-photo" />
            <div className="profile-name">Dayvan</div>
            <div className="profile-vision">A world where self-awareness and presence shape the technology we build, not the other way around</div>
            <div className="profile-valued"><strong>Valued for</strong> — Narrative craft, deep synthesis, and holding space for meaning-making through creative workshops</div>
            <div className="profile-quest"><strong>Current quest</strong> — Launching an institute at the intersection of culture, ecology, and intentional technology</div>
            <div className="profile-skills">
              <span className="profile-skill-tag">Narrative</span>
              <span className="profile-skill-tag">Strategic comms</span>
              <span className="profile-skill-tag">Worldbuilding</span>
            </div>
          </div>

          {/* Anna */}
          <div className="profile-card">
            <img src={annaFace} alt="Anna Zhu" className="profile-photo" />
            <div className="profile-name">Anna Zhu</div>
            <div className="profile-vision">A future where basic needs are universally covered and people are free to work purely from self-actualization and creative freedom.</div>
            <div className="profile-valued"><strong>Valued for</strong> — Executive energy, inspiring ideas, and showing what long-term development through Sanctuary looks like</div>
            <div className="profile-quest"><strong>Current quest</strong> — Using neuroscience to match you with people you truly vibe with</div>
            <div className="profile-skills">
              <span className="profile-skill-tag">Creative direction</span>
              <span className="profile-skill-tag">Strategy</span>
              <span className="profile-skill-tag">Interactivity</span>
            </div>
          </div>

          {/* Open invitation */}
          <div className="profile-card profile-card--cta">
            <div className="profile-photo-placeholder">?</div>
            <div className="profile-name">This could be you</div>
            <div className="profile-vision">What future are you working toward?</div>
            <div className="profile-valued"><strong>Valued for</strong> — What your peers would say you bring to a room</div>
            <div className="profile-quest"><strong>Current quest</strong> — The thing you're building or figuring out right now</div>
            <div className="profile-skills">
              <span className="profile-skill-tag">Apply for the next edition →</span>
            </div>
          </div>

        </div>
      </section>

      {/* RESEARCH LAB */}
      <section className="section-wrap" id="research-lab" style={{ position: 'relative', zIndex: 1 }}>
        <FadeIn className="two-col">
          <div className="sidebar-label">02 — Container</div>
          <div className="content">
            <h2>A magical co-living container to experiment with how we live and work together</h2>
            <p>
              Sanctuary has a rolling residency — an ongoing research lab for how environment, rituals, adnd digital tools can accelerate what we can build. A carefully curated group of 5-10, co-living that feels like home within hours, shared meals, adventurous trips, and a health-first culture.
            </p>
            <img src="/sanctuary-react/co-living-sunset.jpg" alt="Modern co-living space with large windows showing people working together inside, surrounded by mountains at sunset" style={{ width: '100%', borderRadius: '8px', margin: '2rem 0' }} />
            <p>
              Each chapter is co-created by the community. We test coordination tools, reflect on what works, and treat the residency itself as a design object. If you're drawn to unconventional ways of exploring and creating, you'll feel it here.
            </p>
            <Link to="/membership" className="section-link">Learn more →</Link>
          </div>
        </FadeIn>
      </section>

      {/* CONTINUITY */}
      <section className="section-wrap" id="continuity">
        <hr className="rule" />
        <FadeIn className="two-col">
          <div className="sidebar-label">03 — Continuity</div>
          <div className="content">
            <h2>Accountability beyond the residency</h2>
            <p>
              Our members bring a project and a set of open questions. Through structured, online feedback sessions, IRL events, and peer accountability, you move through the blockers that have been sitting in your queue for months and always leave with clear next steps.
            </p>
            <img src="/sanctuary-react/mobile-apps.jpg" alt="Mobile applications showcasing different interfaces and features" style={{ width: '100%', maxWidth: '600px', borderRadius: '8px', margin: '2rem 0' }} />
            <Link to="/membership" className="section-link">Explore the projects →</Link>
          </div>
        </FadeIn>
      </section>


      {/* RESEARCH PUBLICATION */}
      <section className="section-wrap" id="research-publication">
        <hr className="rule" />
        <FadeIn className="two-col">
          <div className="sidebar-label">04 — Research</div>
          <div className="content">
            <h2>Learn from our research publication</h2>
            <p>
              How might AI and web3 technology be used to improve our social fabric? Dig deep into projects and hypotheses that fuel our curiosity. Monthly updates with deep-dives on what we've learned, how it works, and how to get involved.
            </p>
            <Link to="/membership" className="section-link">Subscribe to our Research Reports →</Link>
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
