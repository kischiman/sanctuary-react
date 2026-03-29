import { useEffect } from 'react'
import './PublicationModal.css'

export default function PublicationModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleOpenInNewTab = () => {
    window.open('https://deepworkstudio.substack.com/', '_blank', 'noopener,noreferrer')
  }

  if (!isOpen) return null

  return (
    <div className="publication-modal-backdrop" onClick={handleBackdropClick}>
      <div className="publication-modal">
        <div className="publication-modal-header">
          <h2>Deep Work Studio Publication</h2>
          <div className="publication-modal-actions">
            <button 
              className="close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>
        
        <div className="publication-modal-content">
          <div className="iframe-fallback">
            <div className="publication-preview">
              <h3>Deep Work Studio Publication</h3>
              <p>Research and case studies on AI, web3, and social fabric technology.</p>
              <p>Due to security restrictions, the publication cannot be embedded directly. Click the button below to visit the full site.</p>
              <button 
                className="visit-publication-btn"
                onClick={handleOpenInNewTab}
              >
                Visit Publication →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}