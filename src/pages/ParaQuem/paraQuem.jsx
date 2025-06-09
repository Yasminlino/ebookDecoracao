import React from "react";
import "./paraQuem.css";
import { FiUser, FiDollarSign, FiZap, FiHeart, FiClipboard } from "react-icons/fi";

export default function ParaQuem() {
  const itens = [
    {
      icon: <FiUser />,
      texto: "Quer transformar seus ambientes com sofisticação"
    },
    {
      icon: <FiDollarSign />,
      texto: "Já se arrependeu de alguma escolha de tecido ou cor"
    },
    {
      icon: <FiZap />,
      texto: "Busca segurança e bom gosto ao decorar"
    },
    {
      icon: <FiHeart />,
      texto: "Valoriza estética, funcionalidade e durabilidade"
    },
    {
      icon: <FiClipboard />,
      texto: "Quer planejar sua decoração com mais consciência e menos frustração"
    }
  ];

  return (
    <section className="paraQuem">
      <div className="container">
        <h2 className="paraQuem_title space-grotesk">Este e-book é para você que:</h2>
        <div className="paraQuem_cards">
          {itens.map((item, index) => (
            <div
              className="paraQuem_card"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
              key={index}
            >
              <span className="paraQuem_iconCircle">{item.icon}</span>
              <span>{item.texto}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
