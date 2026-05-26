import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Membership from './pages/Membership'
import Join from './pages/Join'
import Container from './pages/Container'
import Container2 from './pages/Container2'
import Tools from './pages/Tools'
import DeepWork from './pages/DeepWork'

export default function App() {
  const location = useLocation()
  const isDeepWorkPage = location.pathname === '/deepwork'

  try {
    return (
      <>
        <ScrollToTop />
        {!isDeepWorkPage && <Nav />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/updatedhome" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/join" element={<Join />} />
          <Route path="/container" element={<Container />} />
          <Route path="/container2" element={<Container2 />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/deepwork" element={<DeepWork />} />
        </Routes>
        {!isDeepWorkPage && <Footer />}
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
