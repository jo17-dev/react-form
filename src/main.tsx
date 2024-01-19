import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Register from './pages/Register'
import Navbar from './pages/navbar/Navbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path='/sign-up' element={<Register/>} />
      </Routes>
    </Router>
  </React.StrictMode>
)
