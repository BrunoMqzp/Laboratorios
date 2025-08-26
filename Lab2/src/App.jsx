import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CounterApp } from './CounterApp'

function App() {
  return (
      <div>
        <CounterApp value={3} counter={2}></CounterApp>
      </div>
  )
}

export default App
