import { useContext } from "react";
import { AuthContext } from "../components/Logout";

const Logout = ({ style }) => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    console.log("Logged out successfully");
  };

  return (
    <button onClick={handleLogout} className={style}>
      Logout
    </button>
  );
};

export default Logout;
