import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './pages/Form'
import './index.css'
import Success from './pages/Success'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>} />
        <Route path='/success' element={<Success/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
