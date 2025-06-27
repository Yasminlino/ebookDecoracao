import { useState, useEffect} from 'react'
import React from 'react'
import Header from './pages/Header/header'
import Beneficios from './pages/Beneficios/beneficios'
import ParaQuem from './pages/ParaQuem/paraQuem'
import QuemSouEu from './pages/QuemSouEu/quemSouEu'
import Footer from './pages/Footer/footer'
import ChamadaFinal from './pages/ChamadaFinal/chamadaFinal'
import './App.css'

function App() {
  const promoEndDate = new Date('2025-06-27');
promoEndDate.setDate(promoEndDate.getDate() + 7);
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = promoEndDate - now;

      if (difference > 0) {
        const seconds = Math.floor((difference / 1000) % 60);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const hours = Math.floor((difference / 1000 / 60 / 60) % 24);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        const format = (num) => String(num).padStart(2, '0');

        setTimeLeft({
          days: format(days),
          hours: format(hours),
          minutes: format(minutes),
          seconds: format(seconds),
        });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header timeLeft={timeLeft} />
      <Beneficios />
      <ParaQuem />
      <QuemSouEu />
      <ChamadaFinal timeLeft={timeLeft} />
      <Footer />
    </>
  )
}

export default App
