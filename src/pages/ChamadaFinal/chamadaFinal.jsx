import React from "react";
import "./chamadaFinal.css"

export default function ChamadaFinal() {
    return (
        <section className="chamadaFinalCard">
            <div className="chamadaFinal_card">
                <h3>Guia Digital de Decoração com Propósito</h3>

                <ul className="chamadaFinal_lista">
                    <li>Descubra e aplique seu estilo com confiança</li>
                    <li>Evite erros que custam tempo e dinheiro</li>
                    <li>Planeje sua casa de forma funcional e harmônica</li>
                </ul>

                <p className="preco">
                    <strong>Só R$27,00</strong> com acesso imediato no seu e-mail.
                </p>

                <p className="garantia">Inclui garantia de 7 dias</p>

                <a href="#comprar" className="botaoCard">Quero meu guia agora</a>
            </div>
        </section>
    )
}