import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'

function App() {
  const [pagina, setPagina] = useState(<HomePage />)

  return (
    <>
    {pagina}
     
    </>
  )
}

export default App
