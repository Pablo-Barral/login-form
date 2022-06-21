import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './pages/Form'
import './index.css'
import Success from './pages/Success'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form/>
    <Success/>
  </React.StrictMode>
)
