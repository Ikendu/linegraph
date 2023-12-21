import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
      <div className='page'>
        <SideBar />
        <Dashboard />
      </div>
    </>
  )
}

export default App
