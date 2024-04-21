import "./Footer.css";
import LinkControl from "../../ui-controls/link/Link";

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
          <LinkControl children="Contacto" className="line" size="sm"/>

          <span>|</span>

          <LinkControl children="Entregas" className="line" size="sm"/>

          <span>|</span>

          <LinkControl children="Política de Privacidade" className="line" size="sm" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
