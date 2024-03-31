import "./Sidebar.css";
import { Link } from "react-router-dom";

import iconArrow from "../../assets/nav-arrow.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="arrow-container">
        <img src="/arrow.png" className={iconArrow} alt="Arrow" />
      </div>

      <Link>
        <div className="nav-item">Tops</div>
      </Link>

      <Link>
        <div className="nav-item">T-Shirts</div>
      </Link>

      <Link>
        <div className="nav-item">Vestidos</div>
      </Link>

      <Link>
        <div className="nav-item">Calças</div>
      </Link>

      <Link>
        <div className="nav-item">Casacos</div>
      </Link>

      <Link>
        <div className="nav-item">Pijamas</div>
      </Link>

      <Link>
        <div className="nav-item">Desporto</div>
      </Link>

      <Link>
        <div className="nav-item">Macacões</div>
      </Link>

      <Link>
        <div className="nav-item">Bikinis</div>
      </Link>
    </div>
  );
};

export default Sidebar;
