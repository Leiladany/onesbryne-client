import "./Navbar.css";
import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import iconStarOn from "../../assets/nav-star-on.png";
import iconStarOff from "../../assets/nav-star-off.png";
import iconProfile from "../../assets/nav-profile.png";

function Navbar() {
  const [starClicked, setStarClicked] = useState(false);
  const { handleLogout, isAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  const handleStarClick = () => {
    setStarClicked((prevState) => !prevState);
  };

  return (
    <div>
      <div className="navbar-container">
        <section className="navbar-left-section" />

        <section className="navbar-mid-section">
          <Link to="/">
            <h1 className="navbar-title">ONESBRYNE</h1>
          </Link>
        </section>

        <section className="navbar-right-section">
          {!isAuthenticated ? (
            /* IS NOT AUTHENTICATED */
            <>
              <Link to="/signup" className="navbar-link">
                Criar Conta
              </Link>

              <Link to="/login" className="navbar-link">
                Entrar
              </Link>
            </>
          ) : (
            /* IS AUTHENTICATED */
            <>
              <Link to="/favourites">
                <img
                  className="navbar-icons"
                  src={
                    location.pathname === "/favourites"
                      ? iconStarOn
                      : iconStarOff
                  }
                  onClick={handleStarClick}
                  alt="Star"
                />
              </Link>

              <Link to="/profile">
                <img className="navbar-icons" src={iconProfile} alt="Profile" />
              </Link>

              <Link to="/" onClick={handleLogout} className="navbar-link">
                Sair
              </Link>
            </>
          )}
        </section>
      </div>

      <div className="navbar-line" />
    </div>
  );
}

export default Navbar;
