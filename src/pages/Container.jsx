import FadeIn from '../components/FadeIn'

export default function Container() {
  return (
    <>
      {/* HEADER */}
      <div className="page-header">
        <hr />
        <div className="breadcrumb">Container — Research Residency</div>
        <h1>The Container</h1>
        <p className="subtitle">
          An intentional research residency that balances collaborative work, longevity, and socio-technical innovation.
        </p>
      </div>

      {/* TRANSFORMATIVE EXPERIENCES */}
      <div className="pricing-section">
        <h2>Be part of transformative experiences with other experts</h2>
        <p style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 0 1.5rem', color: 'var(--text-secondary)' }}>
          Innovate, go on adventures, improve your health in nature. Each chapter is designed with a personalised set of hypotheses and experiments that unites the group.
        </p>
      </div>
      
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--pad-l) 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '2rem 0' }}>
          <img src="/sanctuary-react/container/18a8b01a-c614-4c00-8fb9-848f7707cd0a_960x939.jpg" alt="Container experience" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
          <img src="/sanctuary-react/container/1c9ac1fb-b6f0-4842-acff-5467d81a132e_1280x1002.webp" alt="Container experience" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0 2rem' }}>
          <img src="/sanctuary-react/container/photo_2026-03-21_18-02-48.jpg" alt="Container experience" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
          <img src="/sanctuary-react/container/e051fbad-12bb-43b1-8013-5024bc5fa01f_1600x1200.webp" alt="Container experience" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
        </div>
      </div>

      {/* TECHNOLOGY & PROGRESS */}
      <div className="pricing-section" style={{ paddingTop: '80px' }}>
        <h2>Accelerate your progress and play with powerful technology</h2>
        <p style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 0 1.5rem', color: 'var(--text-secondary)' }}>
          Build projects, experiment safely and research technology that makes an impact on us and our environment. Take part in play-tests and feedback rounds to refine the products.
        </p>
      </div>
      
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--pad-l) 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '2rem 0' }}>
          <img src="/sanctuary-react/container/ce9c1205-9452-41ab-b30a-08ac8fbef564_1612x802.webp" alt="Technology work" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
          <img src="/sanctuary-react/container/0415431b-c3f2-4d72-a07e-4a88f89e9018_1280x960.webp" alt="Technology work" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0 2rem' }}>
          <img src="/sanctuary-react/container/fe959501-8142-452a-b3bc-e8f14b3c1db1_1600x1204.webp" alt="Technology work" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
          <img src="/sanctuary-react/container/2647c2b2-6c99-4c2e-a7a7-6aae15d55632_1622x1218.webp" alt="Technology work" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
        </div>
      </div>

      {/* SAFE SPACE & NETWORK */}
      <div className="pricing-section" style={{ paddingTop: '80px' }}>
        <h2>Share a safe space with like-minded people</h2>
        <p style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 0 1.5rem', color: 'var(--text-secondary)' }}>
          Tap into each other's knowledge, start meaningful collaborations, share skills. The network helps you stay accountable, mindful and make focused progress.
        </p>
      </div>
      
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--pad-l) 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '2rem 0' }}>
          <img src="/sanctuary-react/container/c9b3d69f-eb41-49df-9114-6b617c0cfd06_1600x1200.webp" alt="Community space" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
          <img src="/sanctuary-react/container/588c6c06-ac25-493c-9bc6-d7580de76894_1622x1218.webp" alt="Community space" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="pricing-section" style={{ paddingTop: '80px' }}>
        <h2>How it feels to be in the Sanctuary</h2>
      </div>
      
      <section className="section-wrap">
        <FadeIn className="quotes-row two">
          <blockquote>"A deep breathing exercise for your productive intentions."</blockquote>
          <blockquote>"It allows deliberate experimentation with new ideas without expectation."</blockquote>
        </FadeIn>
      </section>
      
      <section className="section-wrap">
        <FadeIn className="quotes-row two">
          <blockquote>"Wild ride, learning connection and growth."</blockquote>
          <blockquote>"I feel support with whatever project I want to work on and get honest feedback."</blockquote>
        </FadeIn>
      </section>
      
      <section className="section-wrap">
        <FadeIn>
          <div style={{ textAlign: 'center' }}>
            <blockquote style={{ maxWidth: '600px', margin: '0 auto' }}>"We treat wellness as part of the system."</blockquote>
          </div>
        </FadeIn>
      </section>
    </>
  )
}