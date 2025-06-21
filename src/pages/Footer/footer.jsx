import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img
          src="/ebookDecoracao/assets/imagens/logo.png"
          alt="Camila Decora logo"
          className="footer_logo"
        />
        <h4 className="footer_title">Camila Decora</h4>
        <p>Aprenda a decorar com uma profissional renomada.</p>
        <p>CNPJ: 51.939.948/001-48</p>

        <div className="footer_social">
          <a href="https://instagram.com/camiladecora" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>

        <p>© {new Date().getFullYear()} Camila Decora. Todos os direitos reservados.</p>
        <p className="credito">Desenvolvido por Yasmin Lino</p>
      </div>
    </footer>
  );
}
