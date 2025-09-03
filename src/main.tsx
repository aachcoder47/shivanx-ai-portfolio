
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const container = document.getElementById('root')
console.log('Root container found:', container)
if (!container) throw new Error('Failed to find the root element')
const root = createRoot(container)

console.log('About to render App...')
root.render(<App />)
console.log('App rendered successfully')
