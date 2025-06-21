import React, { useEffect, useState } from "react";
import "./header.css";

export default function AlertaPromocao() {
  const [tempoRestante, setTempoRestante] = useState("");
  const [versao, setVersao] = useState("A");

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


  useEffect(() => {
    const sorteio = Math.random() < 0.5 ? "A" : "B";
    setVersao(sorteio);

    // Envia para o dataLayer do Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "view_version",
      version: sorteio
    });
  }, []);



  const HeadlineSubHeadline1 = () => {
    return (
      <div className="header_content" id="versaoA">
        <h1 className="header_title space-grotesk">
          Transforme Sua Casa com<span className="destaque"> elegância </span> e <span className="destaque">personalidade</span>
        </h1>
        <p className="poppins-thin header_subtitle  left-gradient-border">
          Descubra o estilo que combina com você e aprenda a decorar com praticidade, sem gastar muito.
        </p>
      </div>
    );
  };

  const HeadlineSubHeadline2 = () => {
    return (
      <div className="header_content" id="versaoB">
        <h1 className="header_title left-gradient-border">
          Um passo a passo para transformar sua casa com <span className="destaque"> beleza </span> e <span className="destaque">praticidade.</span>
        </h1>
        <p className="poppins-thin header_subtitle">
          Descubra o estilo que combina com você e aprenda a decorar com praticidade, sem gastar muito.
        </p>
      </div>
    );
  };

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
          <img src="/ebookDecoracao/assets/imagens/logo.webp" alt="Logo Camila Decora" className="logo" />
        </div>

        {versao === "A" ? <HeadlineSubHeadline1 /> : <HeadlineSubHeadline2 />}
      </div>
    </header>
  );
}
