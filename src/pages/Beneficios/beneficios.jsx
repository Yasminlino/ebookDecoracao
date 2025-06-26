import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./beneficios.css";

export default function Beneficios() {
  const beneficiosCasa = [
    "Criar ambientes funcionais, bonitos e acolhedores",
    "Evitar gastos desnecessários com escolhas erradas",
    "Ter mais segurança na hora de compor cada cômodo"
  ];

  const beneficiosPessoais = [
    "Aprender a decorar com personalidade e autenticidade",
    "Entender o seu estilo e como aplicá-lo na prática"
  ];

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: true });
    }
  }, []);

  return (
    <section className="beneficios bottom-gradient-border" aria-label="Benefícios do E-book">
      <div className="container">
        <h2 className="beneficios_title">
          O que você vai conquistar com este material?
        </h2>
        <p className="beneficios_subtitle poppins-thin">
          Uma transformação real na sua forma de enxergar e viver a decoração – mesmo que você não saiba por onde começar.
        </p>

        <div className="glow-wrapper">
          <img
            src="/ebookDecoracao/assets/imagens/tablet.webp"
            className="beneficio_imagem"
            alt="Ilustração do tablet"
          />
        </div>

        <h3 className="beneficio_categoria">Para sua casa:</h3>
        <ul className="beneficios_lista">
          {beneficiosCasa.map((texto, index) => (
            <li
              key={`casa-${index}`}
              className="beneficio_item"
              tabIndex={0}
              aria-label={`Benefício: ${texto}`}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-right"}
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <FaCheckCircle className="beneficio_icone" aria-hidden="true" />
              <span dangerouslySetInnerHTML={{ __html: texto.replace(/(funcionais|bonitos|acolhedores|gastos desnecessários|segurança)/gi, "<strong>$1</strong>") }}></span>
            </li>
          ))}
        </ul>

        <h3 className="beneficio_categoria">Para você:</h3>
        <ul className="beneficios_lista">
          {beneficiosPessoais.map((texto, index) => (
            <li
              key={`pessoal-${index}`}
              className="beneficio_item"
              tabIndex={0}
              aria-label={`Benefício: ${texto}`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-up"}
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <FaCheckCircle className="beneficio_icone" aria-hidden="true" />
              <span dangerouslySetInnerHTML={{ __html: texto.replace(/(personalidade|autenticidade|estilo|na prática)/gi, "<strong>$1</strong>") }}></span>
            </li>
          ))}
        </ul>
        <p className="cta_emocional">Quero me sentir segura para decorar minha casa!</p>
      </div>
    </section>
  );
}
