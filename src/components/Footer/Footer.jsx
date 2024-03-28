import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-line" />

      <div className="footer-container">
        <div className="footer-left-section" />

        <div className="footer-mid-section">
          <h1 className="footer-copyright">
            <span className="footer-copyright-span">Copyright© 2024</span>
            ONESBRYNE
          </h1>
        </div>

        <div className="footer-right-section">
          <Link className="footer-link">Contacto</Link>

          <span>|</span>

          <Link className="footer-link">Entregas</Link>

          <span>|</span>

          <Link className="footer-link">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
