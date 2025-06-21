import React from "react";
import "./quemSouEu.css";

export default function QuemSouEu() {
  return (
    <section className="quemSouEu">
      <div className="quemSouEu_image">
        <img src="/ebookDecoracao/assets/imagens/imagem_perfil.webp" alt="Foto da Camila decoradora" />
      </div>
      <div className="quemSouEu_content">
        <h2 className="quemSouEu_title gradient-text">Quem sou eu?</h2>
        <p className="quemSouEu_text">
          Prazer, sou Camila! Sou decoradora de ambientes formada pelo Centro Europeu, apaixonada por cores, texturas e por transformar casas em espaços que contam histórias com alma.
        </p>
      </div>
    </section>
  );
}