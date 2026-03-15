import FadeIn from '../components/FadeIn'

export default function Membership() {
  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <hr />
        <div className="breadcrumb">Membership — By Invitation</div>
        <h1>Join the Sanctuary network</h1>
        <p className="subtitle">
        Stop burning your remaining runway on constant pivots. Faster feedback and development cycles. More users on your product. A sustainable way of working.
        </p>
      </div>

      {/* APPLICATION PROCESS */}
      <FadeIn className="process-section">
        <hr style={{ border: 'none', borderTop: '1px solid var(--rule)', marginBottom: '2rem' }} />
        <h2>Application Process</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>You're building a product you believe in and want to surround yourself with others doing the same. Sanctuary is not open enrollment. Every member is personally vetted by our community for cultural fit, complementary skills, and alignment with the group's shared vision.</p>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-num">01</div>
            <h3>Inquiry</h3>
            <p>Submit your project and background.</p>
          </div>
          <div className="process-step">
            <div className="step-num">02</div>
            <h3>Interview</h3>
            <p>A 20-minute jam session to check cultural fit.</p>
          </div>
          <div className="process-step">
            <div className="step-num">03</div>
            <h3>Initiation</h3>
            <p>Join your first weekly cohort and enter the lab.</p>
          </div>
        </div>
      </FadeIn>

      {/* PRICING */}
      <div className="pricing-section">
        <h2>Participation Options</h2>
        <p style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 2rem 1.5rem', color: 'var(--text-secondary)' }}>
          All financial contributions are added to a common pool. All members decide how the resources are allocated. Your first month subscription gets your money back if you're not satisfied.
        </p>
      </div>

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 2rem 3rem' }}>
        <FadeIn className="pricing-grid">
          {/* Explorer */}
          <div className="tier">
            <div className="tier-name">Explorer</div>
            <div className="tier-price">$0</div>
            <div className="tier-period">Per month</div>
            <div className="tier-promo" style={{ visibility: 'hidden' }}>—</div>
            <ul className="tier-features">
              <li>Async updates from group sessions</li>
              <li>1:1 expert sessions available as add-ons</li>
              <li>Research publication archive</li>
            </ul>
            <div className="tier-cta">
              <a href="#" className="btn-tier btn-tier--outline">Subscribe →</a>
            </div>
          </div>

          {/* Lifestyle */}
          <div className="tier featured">
            <div className="tier-name">Resident</div>
            <div className="tier-price"><span className="original">$2,500</span>$990</div>
            <div className="tier-period">Per year</div>
            <div className="tier-promo">Reduced rate until September 2026</div>
            <ul className="tier-features">
              <li>Structured expert advice on product, growth, and strategy</li>
              <li>Weekly facilitated product feedback sessions</li>
              <li>1:1 strategy sessions with community experts</li>
              <li>Priority access to curated Sanctuary residencies</li>
              <li>Residency credit to reduce nightly rate</li>
              <li>Documentation on your progress</li>
              <li>Research publication and summary</li>
            </ul>
            <div className="tier-cta">
              <a href="#" className="btn-tier btn-tier--filled">Share your details →</a>
            </div>
          </div>

          {/* Builder */}
          <div className="tier">
            <div className="tier-name">Member</div>
            <div className="tier-price"><span className="original">$250</span>$99</div>
            <div className="tier-period">Per month</div>
            <div className="tier-promo">Reduced rate until September 2026</div>
            <ul className="tier-features">
            <li>Structured expert advice on product, growth, and strategy</li>
              <li>Weekly facilitated product feedback sessions</li>
              <li>1:1 strategy sessions with community experts</li>
              <li>Access to curated Sanctuary residencies</li>
              <li>Documentation on your progress</li>
              <li>Research publication and summary</li>
            </ul>
            <div className="tier-cta">
              <a href="#" className="btn-tier btn-tier--outline">Share your details →</a>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* JOIN OUR TEAM */}
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 2rem 4rem', textAlign: 'center' }}>
        <h2>Join our team</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          We aren't a typical company. Tell us what you're interested in and we can explore how to work together. Get in touch here.
        </p>
      </div>
    </>
  )
}
