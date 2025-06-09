import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header_content">
        {/* Logo */}
        <div className="logo-container">
          <img src="/assets/imagens/camila_decora_logo.webp" alt="Logo Camila Decora" className="logo" />
        </div>

        {/* Título */}
        <h1 className="header_title space-grotesk">
          Transforme Sua Casa: <span className="destaque">Descubra Seu Estilo</span> e <span className="destaque">Decore com Confiança</span>
        </h1>

        <p className="header_subtitle">
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
