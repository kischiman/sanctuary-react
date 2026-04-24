import FadeIn from '../components/FadeIn'
import { useState, useRef } from 'react'
import Lightbox from '../components/Lightbox'

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

function JoinForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [project, setProject] = useState('')
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

    if (!name.trim()) {
      setErrorMessage('Please enter your name')
      return
    }

    if (!project.trim()) {
      setErrorMessage('Please enter your project')
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
        "f37cfc97-d53d-4e96-8280-afb41051cffb": "Join Access",
        "27fb071e-18f3-4246-bb47-d22ba2c4645d": name,
        "ba119538-6344-4a4b-866c-b94acf4aec8f": project
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
        type="text" 
        placeholder="Your name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ 
          width: '100%', 
          padding: '12px', 
          marginBottom: '12px', 
          border: '1px solid var(--faint)', 
          borderRadius: '4px', 
          fontSize: '14px' 
        }} 
        required
      />
      <input 
        type="email" 
        placeholder="Your email address" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ 
          width: '100%', 
          padding: '12px', 
          marginBottom: '12px', 
          border: '1px solid var(--faint)', 
          borderRadius: '4px', 
          fontSize: '14px' 
        }} 
        required
      />
      <input 
        type="text" 
        placeholder="Describe your project" 
        value={project}
        onChange={(e) => setProject(e.target.value)}
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
        className="btn-tier btn-tier--filled"
        disabled={isSubmitting}
        style={{ 
          opacity: isSubmitting ? 0.6 : 1, 
          cursor: isSubmitting ? 'not-allowed' : 'pointer' 
        }}
      >
        {isSubmitting ? 'Submitting...' : 'Get Access'}
      </button>
    </form>
  )
}

export default function Join() {
  const sessionsScrollRef = useRef(null)
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false)
  const [inviteCode, setInviteCode] = useState('')
  const [inviteError, setInviteError] = useState('')

  const handleInviteUnlock = () => {
    if (inviteCode.trim().toUpperCase() === 'BEMOREYOU') {
      setInviteError('')
      setIsInviteModalOpen(true)
      return
    }

    setInviteError('That invite code does not match.')
  }

  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <hr />
        <div className="breadcrumb">Join — By Invitation</div>
        <h1>Join the Sanctuary network</h1>
        <p className="subtitle">
          Stop burning your remaining runway on endless pivots. Faster feedback and development cycles. More users on your product. A sustainable way of working.
        </p>
      </div>

      {/* PARTICIPATION */}
      <div className="pricing-section">
        <h2>Participation</h2>
        <p style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 0 2rem', color: 'var(--text-secondary)' }}>
          Membership is curated and invite-only. Enter your invite code to sign up.
        </p>
      </div>
      
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--pad-l) 3rem' }}>
        <ul style={{ listStyle: 'disc', paddingLeft: '18px', fontSize: '16px', lineHeight: '1.7', color: 'var(--mid)', maxWidth: '600px', marginBottom: '2rem' }}>
          <li>Structured expert advice on product, growth, and strategy</li>
          <li>Weekly facilitated product feedback sessions</li>
          <li>1:1 strategy sessions with community experts</li>
          <li>Access to curated Sanctuary residencies</li>
          <li>Documentation on your progress</li>
          <li>Get featured in blueprints and case studies</li>
          <li>Community access</li>
        </ul>

        <div style={{ maxWidth: '420px' }}>
          <p style={{ marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>Use your invite code to open the sign-up form:</p>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'stretch', flexWrap: 'wrap' }}>
            <input
              type="text"
              value={inviteCode}
              onChange={(e) => {
                setInviteCode(e.target.value)
                if (inviteError) setInviteError('')
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  handleInviteUnlock()
                }
              }}
              placeholder="Enter invite code"
              aria-label="Invite code"
              style={{
                flex: '1 1 220px',
                minWidth: '220px',
                border: '1px solid var(--faint)',
                background: 'white',
                color: 'var(--dark)',
                padding: '0.85rem 1rem',
                borderRadius: '999px',
                fontFamily: 'var(--sans)',
                fontSize: '0.95rem'
              }}
            />
            <button
              type="button"
              onClick={handleInviteUnlock}
              className="btn-tier btn-tier--filled"
              style={{ whiteSpace: 'nowrap' }}
            >
              Unlock form
            </button>
          </div>
          {inviteError && (
            <p style={{ marginTop: '0.75rem', color: '#dc2626', fontSize: '0.9rem' }}>{inviteError}</p>
          )}
        </div>
      </div>

      {/* TRY INDIVIDUAL SESSIONS */}
      <div className="pricing-section" style={{ paddingTop: '80px' }}>
        <h2>Individual sessions</h2>
        <p style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 0 48px', color: 'var(--text-secondary)' }}>
          Shadow on our online sessions to get to know us and learn with us.
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
            <h3 style={{ fontFamily: 'var(--sans)', fontSize: '16px', fontWeight: '500', color: 'var(--dark)', marginBottom: '18px' }}>SocioTech Hot Takes</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '18px', fontSize: '13px', lineHeight: '1.7', color: 'var(--mid)', marginBottom: '20px', flex: 1 }}>
              <li>Peer feedback on current products</li>
              <li>Share progress and get team responses</li>
              <li>Accelerate progress and get unstuck</li>
              <li>Offer your services and learn from others</li>
            </ul>
            <a href="https://luma.com/thesanctuary" target="_blank" rel="noopener noreferrer" className="btn-tier btn-tier--outline" style={{ width: '100%' }}>Sign up</a>
          </div>

          {/* Peer Support */}
          <div style={{ border: '1px solid var(--faint)', borderRadius: '4px', padding: '24px 20px', background: 'var(--cream)', display: 'flex', flexDirection: 'column' }} className="membership-card-mobile">
            <h3 style={{ fontFamily: 'var(--sans)', fontSize: '16px', fontWeight: '500', color: 'var(--dark)', marginBottom: '18px' }}>1:1 Feedback</h3>
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
            <h3 style={{ fontFamily: 'var(--sans)', fontSize: '16px', fontWeight: '500', color: 'var(--dark)', marginBottom: '18px' }}>Playtest</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '18px', fontSize: '13px', lineHeight: '1.7', color: 'var(--mid)', marginBottom: '20px', flex: 1 }}>
              <li>Share your app or prototype</li>
              <li>Get honest feedback from players and users</li>
              <li>Observe real users</li>
              <li>Learn from direct user testing</li>
            </ul>
            <button className="btn-tier btn-tier--outline" disabled style={{ width: '100%', opacity: 0.6, cursor: 'not-allowed' }}>Coming soon</button>
          </div>
        </div>
        
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '48px 0 0', textAlign: 'center' }}>
          <a 
            href="https://calendar.google.com/calendar/u/0?cid=Y19kNWU5NWFkZWEyYjAwZjY4YTc5NDIzMzFhM2JhNjgxZGFhM2UwNzgyZDliZTNmN2EwMWQ0ZWJmMzU0YjM2MWUwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="section-link"
          >
            View our public calendar →
          </a>
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

      <Lightbox
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        title="Join the Sanctuary network"
        contentClassName="join-lightbox-body"
      >
        <div style={{ maxWidth: '420px', margin: '0 auto', padding: '2rem' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Invite code: <strong>BEMOREYOU</strong>
          </p>
          <JoinForm />
        </div>
      </Lightbox>
    </>
  )
}
