import useFadeIn from '../hooks/useFadeIn'

export default function FadeIn({ children, className = '', ...props }) {
  const ref = useFadeIn()
  return (
    <div ref={ref} className={`fade-in ${className}`} {...props}>
      {children}
    </div>
  )
}
