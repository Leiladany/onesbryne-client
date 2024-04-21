import "./Navbar.css";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import LinkControl from "../../ui-controls/link/Link"

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
          <LinkControl to="/">
            <h1 className="navbar-title">ONESBRYNE</h1>
          </LinkControl>
        </section>

        <section className="navbar-right-section">
          {!isAuthenticated ? (
            /* IS NOT AUTHENTICATED */
            <>
              <LinkControl to="/signup" children="Criar Conta" className="line" />

              <LinkControl to="/login" children="Entrar" className="line" />
            </>
          ) : (
            /* IS AUTHENTICATED */
            <>
              {isAdmin && (
                <LinkControl to="/admin">
                  <div className="navbar-icons">
                    {location.pathname === "/admin" ? (
                      <MdAdminPanelSettings color="white" size={20} />
                    ) : (
                      <MdOutlineAdminPanelSettings color="white" size={20} />
                    )}
                  </div>
                </LinkControl>
              )}

              <LinkControl to="/clothes">
                <div className="navbar-icons">
                  {location.pathname === "/clothes" ? (
                    <PiDressFill color="white" size={20} />
                  ) : (
                    <PiDress color="white" size={20} />
                  )}
                </div>
              </LinkControl>

              <LinkControl to="/favourites">
                <div className="navbar-icons" onClick={handleStarClick}>
                  {location.pathname === "/favourites" ? (
                    <IoIosStar color="white" size={20} />
                  ) : (
                    <IoIosStarOutline color="white" size={20} />
                  )}
                </div>
              </LinkControl>

              <LinkControl to="/profile">
                <div className="navbar-icons">
                  {location.pathname === "/profile" ? (
                    <GoPersonFill color="white" size={20} />
                  ) : (
                    <GoPerson color="white" size={20} />
                  )}
                </div>
              </LinkControl>

              <LinkControl to="/" onClick={handleLogout} children="Sair" />
            </>
          )}
        </section>
      </div>

      <div className="navbar-line" />
    </div>
  );
}

export default Navbar;
