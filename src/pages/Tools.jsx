import { useState } from 'react'

const TALLY_FORM_ID = 'ja71MQ'
const TALLY_FORM_URL = 'https://tally.so/r/ja71MQ'
const TALLY_TOOL_FIELD_ID = '1d770618-871d-4c40-b51a-38c19e883a95'
const TALLY_FEEDBACK_FIELD_ID = '2fe613f9-caa9-441c-b3f0-3a4769b999be'

const toolCatalog = [
  {
    name: 'Syncro',
    feedbackValue: 'synchro',
    description:
      'Syncro is a privacy-preserving calendar matching app. It allows you to discover overlapping events with peers without exposing your full calendar.',
    href: 'https://synchro-social.vercel.app/',
    image: '/tools/synchro.png',
  },
  {
    name: 'Compass',
    feedbackValue: 'compass',
    description:
      'Compass is a native iOS founder app for instant note capture with AI extraction, a memory CRM, and community sharing.',
    href: 'https://www.usecompass.app/',
    image: '/tools/compass.svg',
  },
  {
    name: 'Moxa',
    feedbackValue: 'moxa',
    description:
      "Moxa unifies your crypto and fiat transactions into a single, seamless dashboard. Manage your burn rate, track recurring expenses, and get a real-time pulse on your runway so you can focus on building what's next.",
    href: 'https://moxa.money',
    image: '/tools/moxa.png',
  },
]

function createUuid() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID()
  }

  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (char) =>
    (
      Number(char) ^
      (window.crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(char) / 4)))
    ).toString(16)
  )
}

function getPrefilledTallyUrl(tool, feedback) {
  const params = new URLSearchParams({
    [TALLY_TOOL_FIELD_ID]: tool.feedbackValue,
    [TALLY_FEEDBACK_FIELD_ID]: feedback,
  })

  return `${TALLY_FORM_URL}?${params.toString()}`
}

export default function Tools() {
  const [activeTool, setActiveTool] = useState(null)
  const [feedback, setFeedback] = useState('')
  const [submitState, setSubmitState] = useState('idle')

  const openFeedback = (tool) => {
    setActiveTool(tool)
    setFeedback('')
    setSubmitState('idle')
  }

  const closeFeedback = () => {
    setActiveTool(null)
    setFeedback('')
    setSubmitState('idle')
  }

  const submitFeedback = async (event) => {
    event.preventDefault()

    if (!activeTool || !feedback.trim()) {
      return
    }

    setSubmitState('submitting')

    try {
      const response = await fetch(`https://api.tally.so/forms/${TALLY_FORM_ID}/respond`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionUuid: createUuid(),
          respondentUuid: createUuid(),
          responses: {
            [TALLY_TOOL_FIELD_ID]: activeTool.feedbackValue,
            [TALLY_FEEDBACK_FIELD_ID]: feedback.trim(),
          },
          isCompleted: true,
        }),
      })

      if (!response.ok) {
        throw new Error('Tally rejected the feedback submission')
      }

      setSubmitState('success')
    } catch (error) {
      console.error('Tally feedback submission failed:', error)
      setSubmitState('fallback')
    }
  }

  return (
    <>
      <div className="page-header page-header--catalog">
        <hr />
        <div className="breadcrumb">Tools — Community Products & Services</div>
        <h1>Try the creations of our community</h1>
        <p className="subtitle">
          Sanctuary members create and share products for healthier coordination, clearer thinking,
          and resilient communities.
        </p>
      </div>

      <section className="section-wrap catalog-wrap">
        <div className="catalog-section">
          <div className="catalog-grid">
            {toolCatalog.map((item) => (
              <article key={item.name} className="catalog-card">
                <img
                  className={`catalog-card-image catalog-card-image--${item.feedbackValue}`}
                  src={item.image}
                  alt={`${item.name} preview`}
                />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="section-link"
                >
                  try it →
                </a>
                <button
                  type="button"
                  className="section-link catalog-feedback-button"
                  onClick={() => openFeedback(item)}
                >
                  Leave feedback →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeTool && (
        <div className="feedback-modal-backdrop" role="presentation" onClick={closeFeedback}>
          <div
            className="feedback-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Leave feedback for ${activeTool.name}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="feedback-modal-close"
              aria-label="Close feedback form"
              onClick={closeFeedback}
            >
              x
            </button>
            {submitState === 'success' ? (
              <div className="feedback-modal-success">
                <p>Thank you. Your feedback was submitted.</p>
                <button type="button" className="feedback-submit-button" onClick={closeFeedback}>
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submitFeedback}>
                <textarea
                  id={TALLY_FEEDBACK_FIELD_ID}
                  value={feedback}
                  onChange={(event) => setFeedback(event.target.value)}
                  placeholder={`Share feedback for ${activeTool.name}...`}
                  required
                  autoFocus
                />
                {submitState === 'fallback' && (
                  <p className="feedback-modal-note">
                    We could not submit this directly from the site. Your text is still here, and
                    this fallback opens the Tally form with {activeTool.name} selected.
                  </p>
                )}
                <div className="feedback-modal-actions">
                  {submitState === 'fallback' && (
                    <a
                      href={getPrefilledTallyUrl(activeTool, feedback)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="feedback-secondary-link"
                    >
                      Open Tally fallback
                    </a>
                  )}
                  <button
                    type="submit"
                    className="feedback-submit-button"
                    disabled={submitState === 'submitting' || !feedback.trim()}
                  >
                    {submitState === 'submitting' ? 'Submitting...' : 'Submit feedback'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
