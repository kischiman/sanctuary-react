import { useEffect } from 'react'
import './PublicationPopup.css'

export default function PublicationPopup({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 4000) // Auto close after 4 seconds

      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  const handleOpenPublication = () => {
    window.open('https://deepworkstudio.substack.com/', '_blank', 'noopener,noreferrer')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="publication-popup">
      <div className="publication-popup-content">
        <h3>Deep Work Studio Publication</h3>
        <p>Research and case studies on AI, web3, and social fabric technology.</p>
        <div className="publication-popup-actions">
          <button onClick={handleOpenPublication} className="open-publication-btn">
            Open in new tab
          </button>
          <button onClick={onClose} className="popup-close-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}