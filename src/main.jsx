import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('Root element not found!')
  document.body.innerHTML = '<div style="padding: 20px; font-family: Arial;">Error: Root element not found</div>'
} else {
  try {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    )
  } catch (error) {
    console.error('Error rendering app:', error)
    rootElement.innerHTML = '<div style="padding: 20px; font-family: Arial;">Error loading application. Check console for details.</div>'
  }
}
