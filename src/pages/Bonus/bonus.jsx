import React from "react";
import "./bonus.css";

export default function Bonus() {
    return (
        <section className="bonus">
            <div className="bonus_card">
                <h2 className="bonus_title">🎁 Bônus Exclusivo</h2>
                <h3 className="bonus_subtitle">Acesso ao Grupo VIP</h3>
                <p className="bonus_texto">
                    Ao adquirir o e-book, você desbloqueia um acesso especial ao nosso grupo VIP, onde poderá:
                </p>
                <ul className="bonus_lista">
                    <li>Tirar dúvidas diretamente comigo</li>
                    <li>Compartilhar suas experiências com outras pessoas</li>
                    <li>Receber dicas personalizadas para sua casa</li>
                    <li>Participar de conteúdos extras e desafios criativos</li>
                </ul>
                <a href="#compra" className="bonus_button">Quero garantir meu acesso</a>
            </div>
        </section>
    );
}
