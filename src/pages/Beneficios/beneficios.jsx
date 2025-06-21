import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./beneficios.css";

export default function Beneficios() {
  const beneficios = [
    "Aprender a decorar com personalidade e autenticidade",
    "Criar ambientes funcionais, bonitos e acolhedores",
    "Evitar gastos desnecessários com escolhas erradas",
    "Entender o seu estilo e como aplicá-lo na prática",
    "Ter mais segurança na hora de compor cada cômodo"
  ];

  useEffect(() => {
    // Verifica se AOS está importado e inicializa
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  return (
    <section className="beneficios bottom-gradient-border" aria-label="Benefícios do E-book">
      <div className="container">
        <h2 className="beneficios_title gradient-text">
          O que você vai conquistar com este e-book
        </h2>
        <div className="glow-wrapper">
          <img
            src="/ebookDecoracao/assets/imagens/tablet.png"
            className="beneficio_imagem"
            alt="Ilustração do tablet"
          />
        </div>
        <ul className="beneficios_lista">
          {beneficios.map((texto, index) => (
            <li
              key={index}
              className="beneficio_item"
              tabIndex={0}
              aria-label={`Benefício: ${texto}`}
              data-aos="fade-up"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <FaCheckCircle className="beneficio_icone" aria-hidden="true" />
              <span>{texto}</span>
            </li>
          ))}
        </ul>
        <a href="#comprar" className="button_principal destaque" role="button" aria-label="Quero meu guia">
          Quero meu guia
        </a>
      </div>
    </section>
  );
}