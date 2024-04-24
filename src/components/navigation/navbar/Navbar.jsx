import "./Navbar.css";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import LinkComponent from "../../layout/link/Link"

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
          <LinkComponent to="/">
            <h1 className="navbar-title">ONESBRYNE</h1>
          </LinkComponent>
        </section>

        <section className="navbar-right-section">
          {!isAuthenticated ? (
            /* IS NOT AUTHENTICATED */
            <>
              <LinkComponent to="/signup" children="Criar Conta" className="line" />

              <LinkComponent to="/login" children="Entrar" className="line" />
            </>
          ) : (
            /* IS AUTHENTICATED */
            <>
              {isAdmin && (
                <LinkComponent to="/admin">
                  <div className="navbar-icons">
                    {location.pathname === "/admin" ? (
                      <MdAdminPanelSettings color="white" size={20} />
                    ) : (
                      <MdOutlineAdminPanelSettings color="white" size={20} />
                    )}
                  </div>
                </LinkComponent>
              )}

              <LinkComponent to="/clothes">
                <div className="navbar-icons">
                  {location.pathname === "/clothes" ? (
                    <PiDressFill color="white" size={20} />
                  ) : (
                    <PiDress color="white" size={20} />
                  )}
                </div>
              </LinkComponent>

              <LinkComponent to="/favourites">
                <div className="navbar-icons" onClick={handleStarClick}>
                  {location.pathname === "/favourites" ? (
                    <IoIosStar color="white" size={20} />
                  ) : (
                    <IoIosStarOutline color="white" size={20} />
                  )}
                </div>
              </LinkComponent>

              <LinkComponent to="/profile">
                <div className="navbar-icons">
                  {location.pathname === "/profile" ? (
                    <GoPersonFill color="white" size={20} />
                  ) : (
                    <GoPerson color="white" size={20} />
                  )}
                </div>
              </LinkComponent>

              <LinkComponent to="/" onClick={handleLogout} children="Sair" className="line" />
            </>
          )}
        </section>
      </div>

      <div className="navbar-line" />
    </div>
  );
}

export default Navbar;
