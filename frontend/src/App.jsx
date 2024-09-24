import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'

function App() {
  return (
    <>
      <div className='app'>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
    </>
  )
}

export default App
