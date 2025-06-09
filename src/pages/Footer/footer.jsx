import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p><strong>Camila</strong> • CNPJ: 00.000.000/0000-00</p>
                <p>contato@camila.com.br</p>
                <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
