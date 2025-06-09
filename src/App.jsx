import { useState } from 'react'
import React from 'react'
import Header from './pages/Header/header'
import Beneficios from './pages/Beneficios/beneficios'
import ParaQuem from './pages/ParaQuem/paraQuem'
import QuemSouEu from './pages/QuemSouEu/quemSouEu'
import Footer from './pages/Footer/footer'
import ChamadaFinal from './pages/ChamadaFinal/chamadaFinal'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <ParaQuem />
    <Beneficios />
    <QuemSouEu />
    <ChamadaFinal />
    <Footer />
    </>
  )
}

export default App
