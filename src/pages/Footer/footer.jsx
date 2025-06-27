import React from "react";
import { FaInstagram } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <img
          src="/assets/imagens/logo.webp"
          alt="Camila Decora logo"
          className="footer_logo"
        />

        <h4 className="footer_title">Camila Decora</h4>
        <p className="footer_slogan">Transformando ambientes com alma e propósito.</p>

        <div className="footer_info">
          <p><strong>CNPJ:</strong> 51.939.948/001-48</p>
        </div>

        <div className="footer_social" aria-label="Redes sociais">
          <a href="https://www.instagram.com/camiladecoracwb/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        <div className="footer_copy">
          <p>© {new Date().getFullYear()} Camila Decora. Todos os direitos reservados.</p>
          <p className="credito">Desenvolvido por Yasmin Lino</p>
        </div>
      </div>
    </footer>
  );
}
