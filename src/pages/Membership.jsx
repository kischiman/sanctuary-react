import FadeIn from '../components/FadeIn'
import invitationImg from '../assets/invitation.png'

export default function Membership() {
  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <hr />
        <div className="breadcrumb">Membership — By Invitation</div>
        <h1>Become a Citizen of Sanctuary</h1>
        <p className="subtitle">
          A structured space for builders who design and experiment with meaningful tools — together. More users on your product. Faster development cycles. A sustainable way of working.
        </p>
      </div>

      {/* BY INVITATION */}
      <FadeIn className="invitation-band">
        <div className="invitation-inner">
          <div className="invitation-image">
            <img src={invitationImg} alt="Sanctuary invitation" />
          </div>
          <div>
            <h2 className="invitation-heading">The Sanctuary community is inviting you</h2>
            <p>You're building a product you believe in and want to surround yourself with others doing the same.</p>
            <p>Sanctuary is not open enrollment. Every member is personally vetted by our community for cultural fit, complementary skills, and alignment with the group's shared vision.</p>
            <p>This isn't about exclusivity — it's about making sure the people around you are working on things that matter, and that you can genuinely help each other.</p>
          </div>
        </div>
      </FadeIn>

      {/* APPLICATION PROCESS */}
      <FadeIn className="process-section">
        <hr style={{ border: 'none', borderTop: '1px solid var(--rule)', marginBottom: '2rem' }} />
        <h2>Application Process</h2>
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
        <h2>Investment Options</h2>
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
              <li>Research publication archive</li>
              <li>Async updates from group sessions</li>
              <li>1:1 expert sessions available as add-ons</li>
            </ul>
            <div className="tier-cta">
              <a href="#" className="btn-tier btn-tier--outline">Subscribe Free →</a>
            </div>
          </div>

          {/* Lifestyle */}
          <div className="tier featured">
            <div className="tier-name">Resident</div>
            <div className="tier-price"><span className="original">$2,500</span>$990</div>
            <div className="tier-period">Per year</div>
            <div className="tier-promo">Reduced rate until September 2026</div>
            <ul className="tier-features">
              <li>Research publication and summary</li>
              <li>Weekly facilitated group sessions with fellow builders</li>
              <li>Structured peer advice on product, growth, strategy</li>
              <li>Written documentation on your progress and key decisions</li>
              <li>1:1 strategy sessions with community experts</li>
              <li>Priority access to curated Sanctuary residencies</li>
              <li>Residency credit to reduce nightly rate</li>
            </ul>
            <div className="tier-cta">
              <a href="#" className="btn-tier btn-tier--filled">Start the Conversation →</a>
            </div>
          </div>

          {/* Builder */}
          <div className="tier">
            <div className="tier-name">Citizen</div>
            <div className="tier-price"><span className="original">$250</span>$99</div>
            <div className="tier-period">Per month</div>
            <div className="tier-promo">Reduced rate until September 2026</div>
            <ul className="tier-features">
              <li>Research publication and summary</li>
              <li>Weekly facilitated group sessions with fellow builders</li>
              <li>Structured peer advice on product, growth, strategy</li>
              <li>Written documentation on your progress and key decisions</li>
              <li>1:1 strategy sessions with communityexperts</li>
              <li>Access to curated Sanctuary residencies</li>
            </ul>
            <div className="tier-cta">
              <a href="#" className="btn-tier btn-tier--outline">Start the Conversation →</a>
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  )
}
