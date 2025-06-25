import React, { useEffect, useState } from "react";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [versao] = useState(() => (Math.random() < 0.5 ? "A" : "B"));

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "view_version", version: versao });

    // AOS: desativa em mobile para não atrasar renderização
    AOS.init({ duration: 800, once: true, disable: "mobile" });
  }, [versao]);

  return (
    <header className="header border-brown">
      <div className="container header_content">
        <div className="logo-container">
          <img
            src="/ebookDecoracao/assets/imagens/logo.webp"
            alt="Logo Camila Decora"
            className="logo"
            width="80"
            height="80"
            loading="lazy" // era eager
            fetchpriority="low" // era high
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
                Um passo a passo para transformar sua casa com{" "}
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
  );
}

export function AlertaPromocao({ tempoRestante }) {
  return (
    <div className="alerta-promocao" role="alert">
      <div className="conteudo-alerta">
        ⏰ Promoção por tempo limitado: Garanta seu e-book com desconto especial!
        <span className="cronometro">Termina em {tempoRestante}</span>
      </div>
    </div>
  );
}
