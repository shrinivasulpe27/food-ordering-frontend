import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Navbar from './components/Navbar'
import ProtectedRoute  from './components/ProtectedRoute'

function App() {
  
  

  return (
    <>
     {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/success"  element={<ProtectedRoute element={<Success/>}/>} />
      <Route path="/*" element={<Error/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
