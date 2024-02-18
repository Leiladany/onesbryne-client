import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-section" />
      <div className="title-container">
        <h1 className="title">ONESBRYNE</h1>
      </div>
      <div className="right-section">
        <button type="submit">Criar Conta</button>
        <button>Log In</button>
      </div>
    </div>
  );
}

export default Navbar;
