import "./Navbar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const { handleLogout, isAuthenticated } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left-section" />
      <div className="title-container">
        <Link to="/">
          <h1 className="title">ONESBRYNE</h1>
        </Link>
      </div>

      {!isAuthenticated && (
        <div className="right-section">
          <Link to="/signup">
            <button type="submit">Criar Conta</button>
          </Link>

          <Link to="/login">
            <button>Entrar</button>
          </Link>
        </div>
      )}

      {isAuthenticated && (
        <div className="right-section">
          <Link to="/">
            <button type="submit" onClick={handleLogout}>
              Sair
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
