import 'normalize-scss'
import './style.scss'
import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import App from './components/App'

const rootElement = document.getElementById('root')
if (rootElement != null) {
  const root = createRoot(rootElement)
  root.render(<App num={1337} />)
}
