import React, { useEffect, useState, useRef } from "react";
import "./header.css";
import "aos/dist/aos.css";

export default function Header({ timeLeft }) {
  const [versao] = useState(() => (Math.random() < 0.5 ? "A" : "B"));
  const [alertaHeight, setAlertaHeight] = useState(0);
  const alertaRef = useRef(null);

  const alertaAtivo = timeLeft && timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0;

  useEffect(() => {
    if (alertaAtivo && alertaRef.current) {
      setAlertaHeight(alertaRef.current.offsetHeight);
    }
  }, [alertaAtivo]);

  return (
    <>

      {alertaAtivo && (
        <div className="alerta-topo" ref={alertaRef}>
          <span role="img" aria-label="Relógio">⏰</span> Oferta por tempo limitado: <strong>Garanta seu acesso com desconto!</strong>
          <span className="contador">
            <span role="img" aria-label="Calendário">📅</span> {timeLeft.days} dias, <span role="img" aria-label="Relógio de areia">⌛</span> {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
          </span>
        </div>
      )}

      <header
        className="header border-brown"
        style={alertaAtivo ? { paddingTop: `${alertaHeight}px` } : {}}
      >

        <div className="container header_content">
          <div className="logo-container">
            <img
              src="/ebookDecoracao/assets/imagens/logo.webp"
              alt="Logo Camila Decora"
              className="logo"
              width="80"
              height="80"
              loading="lazy"
              fetchpriority="low"
            />
          </div>

          <div className="header_content" id={`versao${versao}`}>
            <h1 className="header_title">
              {versao === "A" ? (
                <>
                  Transforme Sua Casa com <span className="destaque">elegância</span> e{" "}
                  <span className="destaque">personalidade</span>
                </>
              ) : (
                <>
                  Guia de decoração para transformar sua casa com{" "}
                  <span className="destaque">beleza</span> e{" "}
                  <span className="destaque">praticidade</span>
                </>
              )}
            </h1>
            <p className="poppins-thin header_subtitle left-gradient-border">
              Descubra o estilo que combina com você e aprenda a decorar com praticidade, sem gastar muito.
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
