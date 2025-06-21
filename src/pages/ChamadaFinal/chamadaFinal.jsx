import React from "react";
import "./chamadaFinal.css";
import { FaCheckCircle } from "react-icons/fa";

export default function ChamadaFinal() {
  const itens = [
    "Conteúdo direto e prático para você aplicar hoje",
    "Dicas que funcionam para qualquer estilo de casa",
    "Organize sua decoração com confiança e leveza",
    "Evite erros comuns e economize tempo e dinheiro",
    "Visual bonito, leve e fácil de ler",
    "Acesso imediato ao PDF após a compra"
  ];

  const linkDeCheckout = "https://chk.eduzz.com/8WPAAEPYWP";

  return (
    <section className="chamadaFinalCard" id="comprar">
      <div className="chamadaFinal_card estilo-modernizado" data-aos="fade-up">
        <div className="chamadaFinal_topo">
          <h3 className="chamadaFinal_titulo">Guia Prático de Decoração</h3>
          <p className="chamadaFinal_subtitulo">Edição Digital • 17 páginas</p>
        </div>

        <div className="chamadaFinal_preco">
          <span className="preco-antigo">De R$ 47,00</span>
          <span className="preco-promocional">Por R$ 17,00</span>
          <p className="pagamento-unico">Pagamento único. Acesso vitalício ao PDF.</p>
        </div>

        <ul className="chamadaFinal_lista">
          {itens.map((item, index) => (
            <li key={index}>
              <FaCheckCircle className="iconeCheck verde" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={linkDeCheckout}
          className="botaoCard botao-marrom destaque-pulso"
          onClick={() => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "cta_click",
              version: versao // envia junto qual versão estava visível
            });
          }}
        >
          Quero o Guia Agora
        </a>

      </div>
    </section>
  );
}
