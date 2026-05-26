import { useState } from 'react'
import FadeIn from '../components/FadeIn'

const outcomes = [
  {
    number: '01',
    title: 'Your protocol',
    body: 'A personalised protocol designed during intake and refined across the two weeks. Yours to take home, with the integration support to actually run it through the year.'
  },
  {
    number: '02',
    title: 'Your data',
    body: 'Documented measurement across the residency. What you started with, what shifted, what the protocol did. Not a story you tell about the experience, but a record of what actually happened.'
  },
  {
    number: '03',
    title: 'Your cohort, and the wider community',
    body: "The small group you went through the two weeks with, and the ongoing network of people who've done the work. People who care, who you'll keep talking to long after the residency ends."
  }
]

const disqualifiers = [
  "You're curious about wellness, but not in real difficulty.",
  "You want this done to you, rather than with you.",
  "You can't actually disconnect for two weeks.",
  "You wouldn't be at peace among people working with psychedelics, peptides, or similar tools.",
  'You have medical or psychiatric conditions that would need clearance before this kind of work.'
]

export default function Container2() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const closeApplication = () => {
    setIsApplicationOpen(false)
    setIsSubmitted(false)
  }

  return (
    <>
      <div className="page-header page-header--container2">
        <hr />
        <div className="breadcrumb">Container 2 — Sanctuary Residency</div>
        <h1>A safe space for high performers</h1>
        <p className="subtitle">
          Transform your health, do the work that matters, and connect with others who take it as seriously as you do.
        </p>
      </div>

      <section className="container2-hero">
        <div className="container2-hero-copy">
          <div className="container2-eyebrow">A two-week residency</div>
          <p>
            Sanctuary is a two-week residency for a small, curated group. You arrive in a private location in nature, design your own protocol, and run it with experts who accelerate your progress. You may draw on psychedelics, peptides, gut health, neuroscience and movement.
          </p>
          <button type="button" className="btn-tier btn-tier--filled" onClick={() => setIsApplicationOpen(true)}>
            Request to Join
          </button>
        </div>
        <div
          className="container2-hero-image"
          role="img"
          aria-label="A quiet corner of a private residence used for a Sanctuary residency."
        />
      </section>

      <section className="section-wrap">
        <hr className="rule" />
        <FadeIn className="two-col">
          <div className="sidebar-label">01 — The Sanctuary</div>
          <div className="content">
            <h2>The Sanctuary</h2>
            <p>
              Sanctuary is a two-week residency for a small, hand-picked group. We rent a private house, somewhere quiet, somewhere considered, and you arrive with your cohort on a Sunday. Over the first days, your protocol is designed with you. Over the next ten, you run it.
            </p>
            <p>
              Protocols are individual. Yours may draw on psychedelics, peptides, supplementation, nutrition, gut health, and movement, whatever the design calls for. The two weeks are documented. You leave with a record of what changed.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="section-wrap">
        <hr className="rule" />
        <FadeIn className="two-col">
          <div className="sidebar-label">02 — Outcomes</div>
          <div className="content">
            <h2>What you leave with</h2>
            <div className="container2-outcomes">
              {outcomes.map((outcome) => (
                <div key={outcome.number} className="container2-outcome">
                  <div className="container2-outcome-number">{outcome.number}</div>
                  <div>
                    <h3>{outcome.title}</h3>
                    <p>{outcome.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="container2-band">
        <div className="section-wrap">
          <FadeIn className="two-col">
            <div className="sidebar-label">03 — Behind Sanctuary</div>
            <div className="content">
              <h2>Behind Sanctuary</h2>
              <p>
                I&apos;m Andrej. I&apos;m a designer and researcher by training, and Sanctuary is what I&apos;ve been building as my serious work.
              </p>
              <p>
                The residency applies the Deep Work methodology, a body of work I&apos;ve developed over years of design and facilitation practice, to the specific question of recovery and protocol design for people running at intensity. The protocols themselves are designed with a network of practitioners I work with directly: clinicians, somatic practitioners, integration specialists, and protocol designers I&apos;ve chosen because I trust them.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-wrap">
        <hr className="rule" />
        <FadeIn className="two-col">
          <div className="sidebar-label">04 — Price</div>
          <div className="content">
            <h2>Price</h2>
            <div className="container2-price">From €30,000</div>
            <p>
              This covers the two weeks: intake and protocol design, the residence, food, the cohort, and integration support after you leave. Specific experts can be brought in for individual protocols at additional cost, arranged during intake.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="section-wrap">
        <hr className="rule" />
        <div className="container2-voices-heading">05 — Voices</div>
        <FadeIn className="quotes-row two">
          <blockquote>&quot;I&apos;d done retreats before. I came back exhausted, every time. This was the first one where I came back with something I could actually use, and people I&apos;m still talking to a year later.&quot;</blockquote>
          <blockquote>&quot;The thing that surprised me was the measurement. I didn&apos;t have to take it on faith. I have the numbers from before and after, and they&apos;re not the same numbers.&quot;</blockquote>
        </FadeIn>
      </section>

      <section className="section-wrap">
        <hr className="rule" />
        <FadeIn className="container2-disqualifiers">
          <div className="container2-disqualifiers-intro">
            Sanctuary isn&apos;t right for everyone. It isn&apos;t for you if:
          </div>
          <div className="container2-disqualifier-list">
            {disqualifiers.map((item) => (
              <div key={item} className="container2-disqualifier-item">
                {item}
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="section-wrap">
        <hr className="rule" />
        <FadeIn className="container2-cta-block">
          <p>
            Applications are open for the next cohort. After you apply, we&apos;ll set up a conversation to understand whether Sanctuary is right for you, and whether you&apos;re right for this cohort. Selection happens after that conversation.
          </p>
          <button type="button" className="btn-tier btn-tier--filled" onClick={() => setIsApplicationOpen(true)}>
            Request to Join
          </button>
        </FadeIn>
      </section>

      <section className="section-wrap">
        <hr className="rule" />
        <FadeIn className="two-col">
          <div className="sidebar-label">Field Notes</div>
          <div className="container2-notes">
            <a href="#" onClick={(e) => e.preventDefault()}>On the cohort, and the community after <span>→</span></a>
            <a href="#" onClick={(e) => e.preventDefault()}>On the method <span>→</span></a>
            <a href="#" onClick={(e) => e.preventDefault()}>On measurement <span>→</span></a>
          </div>
        </FadeIn>
      </section>

      {isApplicationOpen && (
        <div className="feedback-modal-backdrop" onClick={closeApplication}>
          <div className="feedback-modal container2-modal" onClick={(e) => e.stopPropagation()}>
            <button className="feedback-modal-close" onClick={closeApplication} aria-label="Close application form">
              ×
            </button>
            {!isSubmitted ? (
              <>
                <div className="feedback-modal-eyebrow">Request to Join</div>
                <h2>Request to join the next cohort.</h2>
                <p className="feedback-modal-note">
                  A few questions to brief our conversation. We&apos;ll be in touch within a week to set up a call.
                </p>
                <form
                  className="container2-form"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setIsSubmitted(true)
                  }}
                >
                  <label>
                    <span>Name</span>
                    <input type="text" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" required />
                  </label>
                  <label>
                    <span>How did you find Sanctuary?</span>
                    <input type="text" required />
                  </label>
                  <label>
                    <span>What&apos;s going on for you right now?</span>
                    <textarea rows="4" required />
                  </label>
                  <label>
                    <span>What are you working on, and what are your current goals?</span>
                    <textarea rows="4" required />
                  </label>
                  <label>
                    <span>When could you take two weeks?</span>
                    <input type="text" required />
                  </label>
                  <div className="feedback-modal-actions">
                    <button type="button" className="feedback-secondary-link" onClick={closeApplication}>
                      Back
                    </button>
                    <button type="submit" className="feedback-submit-button">
                      Submit application
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="feedback-modal-success">
                <h2>Thank you.</h2>
                <p>We&apos;ve received your application. You&apos;ll hear from us within a week to set up a conversation.</p>
                <button type="button" className="feedback-submit-button" onClick={closeApplication}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
