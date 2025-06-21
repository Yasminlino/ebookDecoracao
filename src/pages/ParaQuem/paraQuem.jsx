import React, { useEffect } from "react";
import "./paraQuem.css";
import { FiUser, FiDollarSign, FiZap, FiHeart, FiClipboard } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ParaQuem() {
  const itens = [
    { icon: <FiUser />, texto: "Quer transformar seus ambientes com sofisticação" },
    { icon: <FiDollarSign />, texto: "Já se arrependeu de alguma escolha de tecido ou cor" },
    { icon: <FiZap />, texto: "Busca segurança e bom gosto ao decorar" },
    { icon: <FiHeart />, texto: "Valoriza estética, funcionalidade e durabilidade" },
    { icon: <FiClipboard />, texto: "Quer planejar sua decoração com mais consciência e menos frustração" }
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="paraQuem border-brown">
      <div className="container">
        <h2 className="gradient-text">Este e-book é para você que:</h2>
        <p className="paraQuem_subtitle">
          Descubra como transformar sua casa em um verdadeiro lar cheio de personalidade.  
        </p>
        <div className="paraQuem_cards">
          {itens.map((item, index) => (
            <div
              className="paraQuem_card"
              key={index}
              data-aos="fade-up"
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