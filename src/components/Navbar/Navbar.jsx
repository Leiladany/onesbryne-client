import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-section" />
      <div className="title-container">
        <Link to="/">
          <h1 className="title">ONESBRYNE</h1>
        </Link>
      </div>
      <div className="right-section">
        <Link to="/signup">
          <button type="submit">Criar Conta</button>
        </Link>
        <Link to="/login">
          <button>Entrar</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
