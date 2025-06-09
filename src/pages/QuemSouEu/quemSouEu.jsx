import React from "react";
import "./quemSouEu.css";

export default function QuemSouEu() {
  return (
    <section className="quemSouEu">
      <div className="container quemSouEu_container">
        <div className="quemSouEu_image">
          <img src="/assets/imagens/imagem_perfil.jpg" alt="Foto da Camila decoradora" />
        </div>
        <div className="quemSouEu_content">
          <h2 className="quemSouEu_title">Quem sou eu?</h2>
          <p className="quemSouEu_text">
            Prazer, sou Camila! Sou decoradora de ambientes formada pelo Centro Europeu, apaixonada por cores, texturas e por transformar casas em espaços que contam histórias com alma.
          </p>
          <p className="quemSouEu_text">
            Artesã desde criança, advogada por formação e mãe de duas princesas. Amo esportes radicais e sou sagitariana — movida por criatividade, liberdade e muita energia!
          </p>
          <p className="quemSouEu_text destaque">
            Vem comigo nessa jornada para decorar com personalidade, propósito e muita autenticidade!
          </p>
        </div>
      </div>
    </section>
  );
}