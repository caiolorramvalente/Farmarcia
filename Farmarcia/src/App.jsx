import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
 import { BrowserRouter,Router,Route, Routes} from 'react-router-dom'
 import PaginaAtendimentos from './pages/PaginaAtendimentos'
import RemediosFarmarcia from './pages/RemediosFarmarcia'
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path="/Atendimentos" element={<PaginaAtendimentos />} />
      <Route path="/Remedios" element={<RemediosFarmarcia />} />

    </Routes>
    
    </BrowserRouter>
    
    
 
   
     
    </>
  )
}

export default App
