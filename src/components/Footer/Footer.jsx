import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerleft-section" />
      <div className="copyritgh-container">
        <h1 className="copyritgh">
          <span>Copyright© 2024</span> ONESBRYNE
        </h1>
      </div>
      <div className="copyritghright-section">
        <button type="submit">Contacto</button>
        <span>|</span>
        <button>Entregas</button>
        <span>|</span>
        <button>Política de Privacidade</button>
      </div>
    </div>
  );
}

export default Footer;
