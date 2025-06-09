import React from "react";
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

  return (
    <section className="beneficios">
      <div className="container">
        <h2 className="beneficios_title">
          O que você vai conquistar com este e-book
        </h2>
        <ul className="beneficios_lista">
          {beneficios.map((texto, index) => (
            <li
              key={index}
              className="beneficio_item"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <span className="beneficio_icone">
                <FaCheckCircle />
              </span>
              <span>{texto}</span>
            </li>
          ))}
        </ul>
        <a href="#comprar" className="button_principal destaque">
          Quero meu guia
        </a>
      </div>
    </section>
  );
}