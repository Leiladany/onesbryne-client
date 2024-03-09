import './sideNavbar.css';

const SideNavbar = () => {
  return (
    <div className="sidebar">
      <div className="arrow-container">
        <img src="/arrow.png" alt="Arrow" className="arrow-icon" />
      </div>
      <div className="nav-item">Tops</div>
      <div className="nav-item">T-Shirts</div>
      <div className="nav-item">Vestidos</div>
      <div className="nav-item">Calças</div>
      <div className="nav-item">Casacos</div>
      <div className="nav-item">Pijamas</div>
      <div className="nav-item">Desporto</div>
      <div className="nav-item">Macacões</div>
      <div className="nav-item">Bikinis</div>
    </div>
  );
};

export default SideNavbar;
