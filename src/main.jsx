import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import App from './App.minimal' // Uncomment to test minimal version
import './styles/global.css'

console.log('main.jsx loaded')

const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('Root element not found!')
  document.body.innerHTML = '<div style="padding: 20px; font-family: Arial;">Error: Root element not found</div>'
} else {
  console.log('Root element found, attempting to render...')
  try {
    const root = ReactDOM.createRoot(rootElement)
    console.log('ReactDOM.createRoot successful')
    
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    )
    console.log('App rendered successfully')
  } catch (error) {
    console.error('Error rendering app:', error)
    rootElement.innerHTML = '<div style="padding: 20px; font-family: Arial;">Error loading application: ' + error.message + '</div>'
  }
}
