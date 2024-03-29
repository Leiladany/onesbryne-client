import "./Navbar.css";
import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const [starClicked, setStarClicked] = useState(false);
  const { handleLogout, isAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  const handleStarClick = () => {
    setStarClicked((prevState) => !prevState);
  };

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
          <Link to="/favourites">
            <img
              className="star"
              src={
                location.pathname === "/favourites"
                  ? "/star4.png"
                  : "/star3.png"
              }
              onClick={handleStarClick}
              alt="Star"
            />
          </Link>

          <Link to="/perfil">
          <img className="perfil" src="/perfil.png" alt="Perfil" />
          </Link>

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
