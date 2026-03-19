import FadeIn from '../components/FadeIn'
import { useState, useRef } from 'react'

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

function ScrollArrows({ containerRef }) {
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <div className="scroll-arrows">
      <button className="scroll-arrow scroll-arrow-left" onClick={scrollLeft} aria-label="Scroll left">
        ←
      </button>
      <button className="scroll-arrow scroll-arrow-right" onClick={scrollRight} aria-label="Scroll right">
        →
      </button>
    </div>
  )
}

export default function Membership() {
  const membershipScrollRef = useRef(null)
  const sessionsScrollRef = useRef(null)

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


      {/* PRICING */}
      <div className="pricing-section">
        <h2>Participation Options</h2>
        <p style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 0 1.5rem', color: 'var(--text-secondary)' }}>
          Access is currently free as we are consolidating the participation options. All financial contributions are added to a common pool. Members decide how the resources are allocated.
        </p>
      </div>

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--pad-l) 3rem', position: 'relative' }}>
        <ScrollArrows containerRef={membershipScrollRef} />
        <div 
          ref={membershipScrollRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'stretch' }} 
          className="membership-cards-container"
        >
          {/* Explorer */}
          <div style={{ border: '1px solid var(--faint)', borderRadius: '4px', padding: '24px 20px', background: 'var(--cream)', display: 'flex', flexDirection: 'column' }} className="membership-card-mobile">
            <div className="tier-name">Explorer</div>
            <div className="tier-price">$0</div>
            <div className="tier-period">Per month</div>
            <div className="tier-promo" style={{ visibility: 'hidden' }}>—</div>
            <ul style={{ listStyle: 'disc', paddingLeft: '18px', fontSize: '13px', lineHeight: '1.7', color: 'var(--mid)', marginBottom: '20px', flex: 1 }}>
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
          <div style={{ border: '1px solid var(--faint)', borderRadius: '4px', padding: '24px 20px', background: 'var(--cream)', display: 'flex', flexDirection: 'column' }} className="membership-card-mobile">
            <div className="tier-name">Resident</div>
            <div className="tier-price"><span className="original">$2,490</span>Free</div>
            <div className="tier-period">Per year</div>
            <div className="tier-promo">Limited-time offer only in April</div>
            <ul style={{ listStyle: 'disc', paddingLeft: '18px', fontSize: '13px', lineHeight: '1.7', color: 'var(--mid)', marginBottom: '20px', flex: 1 }}>
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
          <div style={{ border: '1px solid var(--faint)', borderRadius: '4px', padding: '24px 20px', background: 'var(--cream)', display: 'flex', flexDirection: 'column' }} className="membership-card-mobile">
            <div className="tier-name">Member</div>
            <div className="tier-price"><span className="original">$249</span>Free</div>
            <div className="tier-period">Per month</div>
            <div className="tier-promo">Limited-time offer only in April</div>
            <ul style={{ listStyle: 'disc', paddingLeft: '18px', fontSize: '13px', lineHeight: '1.7', color: 'var(--mid)', marginBottom: '20px', flex: 1 }}>
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
        </div>
      </div>

      {/* TRY INDIVIDUAL SESSIONS */}
      <div className="pricing-section" style={{ paddingTop: '80px' }}>
        <h2>Try individual sessions</h2>
        <p style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 0 48px', color: 'var(--text-secondary)' }}>
          Participate actively in our online sessions to get to know us, spotlight your project, and learn with us.
        </p>
      </div>
      
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--pad-l) 0', position: 'relative' }}>
        <ScrollArrows containerRef={sessionsScrollRef} />
        <div 
          ref={sessionsScrollRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'stretch' }} 
          className="membership-cards-container"
        >
          {/* Hot Takes */}
          <div style={{ border: '1px solid var(--faint)', borderRadius: '4px', padding: '24px 20px', background: 'var(--cream)', display: 'flex', flexDirection: 'column' }} className="membership-card-mobile">
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
          <div style={{ border: '1px solid var(--faint)', borderRadius: '4px', padding: '24px 20px', background: 'var(--cream)', display: 'flex', flexDirection: 'column' }} className="membership-card-mobile">
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
          <div style={{ border: '1px solid var(--faint)', borderRadius: '4px', padding: '24px 20px', background: 'var(--cream)', display: 'flex', flexDirection: 'column' }} className="membership-card-mobile">
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
