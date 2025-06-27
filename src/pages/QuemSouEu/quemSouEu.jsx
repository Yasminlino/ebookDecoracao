import React, { useEffect } from "react";
import "./quemSouEu.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function QuemSouEu() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="quemSouEu">
      <div className="quemSouEu_container">
        <div className="quemSouEu_image" data-aos="fade-right">
          <img
            src="/assets/imagens/imagem_perfil.webp"
            alt="Foto da Camila decoradora"
            loading="lazy"
          />
        </div>
        <div className="quemSouEu_content" data-aos="fade-left">
          <h2 className="quemSouEu_title gradient-text">Prazer, sou Camila</h2>
          <p className="quemSouEu_text">
            Sou decoradora de ambientes formada pelo Centro Europeu, apaixonada por cores, texturas e pela transformação que um lar pode causar na vida das pessoas.
          </p>
          <p className="quemSouEu_text">
            Acredito que a decoração não precisa ser cara para ser incrível — ela precisa ter alma, personalidade e fazer sentido pra você. É isso que ensino com carinho em cada página deste e-book.
          </p>
        </div>
      </div>
    </section>
  );
}
