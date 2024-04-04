import "./Navbar.css";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { GoPerson, GoPersonFill } from "react-icons/go";
import { PiDress, PiDressFill } from "react-icons/pi";
import {
  MdAdminPanelSettings,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";

function Navbar() {
  const { handleLogout, isAuthenticated, isAdmin } = useContext(AuthContext);
  const location = useLocation();
  const handleStarClick = () => {
    (prevState) => !prevState;
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
              {isAdmin && (
                <Link to="/admin">
                  <div className="navbar-icons">
                    {location.pathname === "/admin" ? (
                      <MdAdminPanelSettings color="white" size={20} />
                    ) : (
                      <MdOutlineAdminPanelSettings color="white" size={20} />
                    )}
                  </div>
                </Link>
              )}

              <Link to="/clothes">
                <div className="navbar-icons">
                  {location.pathname === "/clothes" ? (
                    <PiDressFill color="white" size={20} />
                  ) : (
                    <PiDress color="white" size={20} />
                  )}
                </div>
              </Link>

              <Link to="/favourites">
                <div className="navbar-icons" onClick={handleStarClick}>
                  {location.pathname === "/favourites" ? (
                    <IoIosStar color="white" size={20} />
                  ) : (
                    <IoIosStarOutline color="white" size={20} />
                  )}
                </div>
              </Link>

              <Link to="/profile">
                <div className="navbar-icons">
                  {location.pathname === "/profile" ? (
                    <GoPersonFill color="white" size={20} />
                  ) : (
                    <GoPerson color="white" size={20} />
                  )}
                </div>
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
