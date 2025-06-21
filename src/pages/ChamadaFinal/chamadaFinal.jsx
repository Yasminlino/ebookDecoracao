import React from "react";
import "./chamadaFinal.css";

export default function ChamadaFinal() {
  return (
    <section className="chamadaFinalCard" id="comprar">
      <div className="chamadaFinal_card">
        <h3 className="chamadaFinal_titulo">Guia Digital de Decoração com Propósito</h3>

        <ul className="chamadaFinal_lista">
          <li>Descubra e aplique seu estilo com confiança</li>
          <li>Evite erros que custam tempo e dinheiro</li>
          <li>Planeje sua casa de forma funcional e harmônica</li>
        </ul>

        <p className="preco">
          <span className="preco-antigo">R$ 40,00</span>
          <span className="preco-promocional">R$ 37,00</span>
        </p>

        <p className="garantia">Inclui garantia de 7 dias</p>

        <a href="#comprar" className="botaoCard" role="button" aria-label="Comprar e-book agora">
          Comprar meu e-book agora!
        </a>
      </div>
    </section>
  );
}
