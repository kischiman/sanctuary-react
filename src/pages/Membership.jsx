import FadeIn from '../components/FadeIn'
import { useState } from 'react'

function ReservationForm({ tierName }) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('idle') // idle, success, error
  const [errorMessage, setErrorMessage] = useState('')

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')

    // Generate unique UUIDs
    const generateUuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0
      const v = c == 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
    
    const sessionUuid = generateUuid()
    const respondentUuid = generateUuid()

    const payload = {
      sessionUuid: sessionUuid,
      respondentUuid: respondentUuid,
      isCompleted: true,
      responses: {
        "7bbbfa41-15ab-45f9-a10d-618a3896ced1": email,
        "f37cfc97-d53d-4e96-8280-afb41051cffb": tierName
      }
    }
    
    console.log('Sending payload:', JSON.stringify(payload, null, 2))

    try {
      const response = await fetch('https://api.tally.so/forms/Me5MLk/respond', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)
      
      const responseData = await response.text()
      console.log('Response data:', responseData)

      if (response.ok) {
        setStatus('success')
      } else {
        throw new Error(`Submission failed: ${response.status} - ${responseData}`)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--dark)' }}>
        You're in. We'll reach out soon.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Your email address" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ 
          width: '100%', 
          padding: '12px', 
          marginBottom: errorMessage ? '8px' : '12px', 
          border: errorMessage ? '1px solid #dc2626' : '1px solid var(--faint)', 
          borderRadius: '4px', 
          fontSize: '14px' 
        }} 
        required
      />
      {errorMessage && (
        <div style={{ 
          fontSize: '12px', 
          color: '#dc2626', 
          marginBottom: '12px' 
        }}>
          {errorMessage}
        </div>
      )}
      <button 
        type="submit"
        className={tierName === 'Resident' ? 'btn-tier btn-tier--filled' : 'btn-tier btn-tier--outline'} 
        disabled={isSubmitting}
        style={{ 
          opacity: isSubmitting ? 0.6 : 1, 
          cursor: isSubmitting ? 'not-allowed' : 'pointer' 
        }}
      >
        {isSubmitting ? 'Reserving...' : 'Reserve Spot'}
      </button>
    </form>
  )
}

export default function Membership() {
  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <hr />
        <div className="breadcrumb">Membership — By Invitation</div>
        <h1>Join the Sanctuary network</h1>
        <p className="subtitle">
        Stop burning your remaining runway on endless pivots. Faster feedback and development cycles. More users on your product. A sustainable way of working.
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
        <p style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 0 1.5rem', color: 'var(--text-secondary)' }}>
          Access is currently free as we are consolidating the participation options. All financial contributions are added to a common pool. Members decide how the resources are allocated.
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
              <li>Community access</li>
              <li>Async updates from group sessions</li>
              <li>Recordings and session summaries</li>
              <li>Individual expert sessions</li>
              <li>Blueprint and case study archive</li>

            </ul>
            <div className="tier-cta">
              <a href="https://t.me/+09A051ccP5EzNzky" target="_blank" rel="noopener noreferrer" className="btn-tier btn-tier--outline">Join our Telegram Group →</a>
            </div>
          </div>

          {/* Lifestyle */}
          <div className="tier featured">
            <div className="tier-name">Resident</div>
            <div className="tier-price"><span className="original">$2,490</span>Free</div>
            <div className="tier-period">Per year</div>
            <div className="tier-promo">Limited-time offer only in April</div>
            <ul className="tier-features">
              <li>Structured expert advice on product, growth, and strategy</li>
              <li>Weekly facilitated product feedback sessions</li>
              <li>1:1 strategy sessions with community experts</li>
              <li>Priority access to curated Sanctuary residencies</li>
              <li>Residency credit to reduce nightly rate</li>
              <li>Documentation on your progress</li>
              <li>Get featured in blueprints and case studies</li>
              <li>Community access</li>
            </ul>
            <div className="tier-cta">
              <ReservationForm tierName="Resident" />
            </div>
          </div>

          {/* Builder */}
          <div className="tier">
            <div className="tier-name">Member</div>
            <div className="tier-price"><span className="original">$249</span>Free</div>
            <div className="tier-period">Per month</div>
            <div className="tier-promo">Limited-time offer only in April</div>
            <ul className="tier-features">
            <li>Structured expert advice on product, growth, and strategy</li>
              <li>Weekly facilitated product feedback sessions</li>
              <li>1:1 strategy sessions with community experts</li>
              <li>Access to curated Sanctuary residencies</li>
              <li>Documentation on your progress</li>
              <li>Get featured in blueprints and case studies</li>
              <li>Community access</li>
            </ul>
            <div className="tier-cta">
              <ReservationForm tierName="Member" />
            </div>
          </div>
        </FadeIn>
      </div>

      {/* TRY INDIVIDUAL SESSIONS */}
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '80px var(--pad-l) 0' }}>
        <h2>Try individual sessions</h2>
        <p style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 0 48px', color: 'var(--text-secondary)' }}>
          Participate actively in our online sessions to get to know us, spotlight your project, and learn with us.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'stretch' }}>
          {/* Hot Takes */}
          <div style={{ border: '1px solid var(--faint)', borderRadius: '4px', padding: '24px 20px', background: 'var(--cream)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'var(--sans)', fontSize: '16px', fontWeight: '500', color: 'var(--dark)', marginBottom: '6px' }}>Hot Takes</h3>
            <div style={{ fontSize: '20px', fontWeight: '500', color: 'var(--dark)', marginBottom: '12px' }}>$99</div>
            <ul style={{ listStyle: 'disc', paddingLeft: '18px', fontSize: '13px', lineHeight: '1.7', color: 'var(--mid)', marginBottom: '20px', flex: 1 }}>
              <li>Peer feedback on current products</li>
              <li>Share progress and get team responses</li>
              <li>Accelerate progress and get unstuck</li>
              <li>Offer your services and learn from others</li>
            </ul>
            <button className="btn-tier btn-tier--outline" disabled style={{ width: '100%', opacity: 0.6, cursor: 'not-allowed' }}>Coming soon</button>
          </div>

          {/* Peer Support */}
          <div style={{ border: '1px solid var(--faint)', borderRadius: '4px', padding: '24px 20px', background: 'var(--cream)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'var(--sans)', fontSize: '16px', fontWeight: '500', color: 'var(--dark)', marginBottom: '6px' }}>Peer Support</h3>
            <div style={{ fontSize: '20px', fontWeight: '500', color: 'var(--dark)', marginBottom: '12px' }}>$99</div>
            <ul style={{ listStyle: 'disc', paddingLeft: '18px', fontSize: '13px', lineHeight: '1.7', color: 'var(--mid)', marginBottom: '20px', flex: 1 }}>
              <li>Share personal blockers and challenges</li>
              <li>Get advice on how to get unstuck</li>
              <li>Feel heard and seen in your journey</li>
              <li>Make building more delightful</li>
            </ul>
            <button className="btn-tier btn-tier--outline" disabled style={{ width: '100%', opacity: 0.6, cursor: 'not-allowed' }}>Coming soon</button>
          </div>

          {/* Playtest */}
          <div style={{ border: '1px solid var(--faint)', borderRadius: '4px', padding: '24px 20px', background: 'var(--cream)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontFamily: 'var(--sans)', fontSize: '16px', fontWeight: '500', color: 'var(--dark)', marginBottom: '6px' }}>Playtest</h3>
            <div style={{ fontSize: '20px', fontWeight: '500', color: 'var(--dark)', marginBottom: '12px' }}>$99</div>
            <ul style={{ listStyle: 'disc', paddingLeft: '18px', fontSize: '13px', lineHeight: '1.7', color: 'var(--mid)', marginBottom: '20px', flex: 1 }}>
              <li>Share your app or prototype</li>
              <li>Get honest feedback from players and users</li>
              <li>Observe real users</li>
              <li>Learn from direct user testing</li>
            </ul>
            <button className="btn-tier btn-tier--outline" disabled style={{ width: '100%', opacity: 0.6, cursor: 'not-allowed' }}>Coming soon</button>
          </div>
        </div>
      </div>

      {/* JOIN OUR TEAM */}
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '80px 2rem 4rem', textAlign: 'center' }}>
        <h2>Join our team</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          We aren't a typical company. Tell us what you're interested in and we can explore how to work together.
        </p>
        <a href="https://t.me/andrejberlin" target="_blank" rel="noopener noreferrer" className="section-link" style={{ marginTop: 0 }}>Get in touch →</a>
      </div>
    </>
  )
}
