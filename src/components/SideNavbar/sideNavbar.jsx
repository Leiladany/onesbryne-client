import './sideNavbar.css';

const SideNavbar = () => {
  return (
    <div className="sidebar">
      <div className="arrow-container">
        <img src="/arrow.png" alt="Arrow" className="arrow-icon" />
      </div>
      <div className="nav-item">Home</div>
      <div className="nav-item">About</div>
      <div className="nav-item">Services</div>
      <div className="nav-item">Contact</div>
    </div>
  );
};

export default SideNavbar;
