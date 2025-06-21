import React, { useEffect, useState } from "react";
import "./header.css";

export default function AlertaPromocao() {
  const [tempoRestante, setTempoRestante] = useState("");

  useEffect(() => {
    const dataFim = new Date();
    dataFim.setDate(dataFim.getDate() + 7); // 7 dias a partir de hoje

    const interval = setInterval(() => {
      const agora = new Date().getTime();
      const distancia = dataFim.getTime() - agora;

      if (distancia <= 0) {
        setTempoRestante("Expirado");
        clearInterval(interval);
        return;
      }

      const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((distancia / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((distancia / (1000 * 60)) % 60);
      const segundos = Math.floor((distancia / 1000) % 60);

      setTempoRestante(`${dias}d ${horas}h ${minutos}m ${segundos}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <header className="header border-brown">
{/* 
      <div className="alerta-promocao" role="alert">
        <div className="conteudo-alerta">
          ⏰ Promoção por tempo limitado: Garanta seu e-book com desconto especial!
          <span className="cronometro">Termina em {tempoRestante}</span>
        </div>
      </div> */}


      <div className="container header_content">
        {/* Logo */}
        <div className="logo-container">
          <img src="/ebookDecoracao/assets/imagens/logo.png" alt="Logo Camila Decora" className="logo" />
        </div>

        {/* Título */}
        <h1 className="header_title space-grotesk">
          Transforme Sua Casa: <span className="destaque">Descubra Seu Estilo</span> e <span className="destaque">Decore com Confiança</span>
        </h1>

        <p className="header_subtitle left-gradient-border">
          Um guia prático e inspirador para transformar sua casa em um lar com <span className="destaque">alma</span>, <span className="destaque">beleza</span> e <span className="destaque">personalidade</span>.
        </p>

        {/* Botão */}
        <a href="#comprar" className="header_button">
          Quero meu guia
        </a>
      </div>
    </header>
  );
}
