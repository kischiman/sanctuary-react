import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Membership from './pages/Membership'
import Join from './pages/Join'
import Container from './pages/Container'

export default function App() {
  try {
    return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/join" element={<Join />} />
          <Route path="/container" element={<Container />} />
        </Routes>
        <Footer />
      </>
    )
  } catch (error) {
    console.error('App render error:', error)
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Application Error</h1>
        <p>There was an error loading the application.</p>
        <pre>{error.toString()}</pre>
      </div>
    )
  }
}
