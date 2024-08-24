import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Router, RouterProvider, Routes, useNavigation } from 'react-router-dom'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Dashboard } from './pages/dashboard'
import { SendMoney } from './pages/SendMoney'
import SuccessPage from './components/SuccessPage'
import { useNavigate } from 'react-router-dom';



function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/send' element={<SendMoney />} />
          <Route path='/success' element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
