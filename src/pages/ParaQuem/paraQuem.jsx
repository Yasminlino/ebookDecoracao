import React, { useEffect } from "react";
import "./paraQuem.css";
import {
  FiUser,
  FiDollarSign,
  FiZap,
  FiHeart,
  FiClipboard,
  FiHome,
  FiDroplet,
  FiImage,
  FiLayers,
  FiSun
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ParaQuem() {
  const topicos = [
    {
      icon: <FiLayers />,
      titulo: "Estilos de Decoração",
      descricao: "Conheça os principais estilos decorativos e descubra qual combina mais com sua personalidade."
    },
    {
      icon: <FiDollarSign />,
      titulo: "Decoração Econômica",
      descricao: "Dicas para transformar sua casa gastando pouco, com ideias criativas e acessíveis."
    },
    {
      icon: <FiImage />,
      titulo: "Composição de Paredes",
      descricao: "Aprenda a criar galerias de quadros e composições que dão personalidade ao seu lar."
    },
    {
      icon: <FiDroplet />,
      titulo: "Teoria das Cores",
      descricao: "Aprenda a combinar cores de forma harmoniosa para criar ambientes equilibrados e aconchegantes."
    },
    {
      icon: <FiHome />,
      titulo: "Organização de Espaços",
      descricao: "Técnicas para aproveitar cada centímetro da sua casa, mesmo em ambientes pequenos."
    },
    {
      icon: <FiSun />,
      titulo: "Iluminação Perfeita",
      descricao: "Descubra como a iluminação certa pode transformar completamente o ambiente da sua casa."
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="paraQuem border-brown" aria-label="Conteúdo do E-book">
      <div className="container">
        <h2 className="paraQuem_title gradient-text">O que você vai aprender</h2>
        <p className="paraQuem_subtitle">
          Um guia completo para transformar sua casa com bom gosto, equilíbrio e funcionalidade.
        </p>

        <div className="paraQuem_cards">
          {topicos.map((item, index) => (
            <div
              className="paraQuem_card show"
              key={index}
              data-aos="fade-up"
              style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
            >
              <div className="paraQuem_iconCircle">{item.icon}</div>
              <div>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
