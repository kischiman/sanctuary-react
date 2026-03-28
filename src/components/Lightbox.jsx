import { useEffect } from 'react'

export default function Lightbox({ isOpen, onClose, src, title = "Publication" }) {
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header">
          <h3>{title}</h3>
          <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
            ×
          </button>
        </div>
        <div className="lightbox-iframe-container">
          <iframe
            src={src}
            width="100%"
            height="100%"
            frameBorder="0"
            title={title}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}