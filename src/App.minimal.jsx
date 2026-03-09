export default function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Sanctuary - Test Version</h1>
      <p>If you can see this, React is working correctly.</p>
      <p>Current URL: {window.location.href}</p>
      <p>User agent: {navigator.userAgent}</p>
    </div>
  )
}