import "./AdminPage.css";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div>
      <p>hello</p>

      <Link to="/admin/add"> Add New Piece</Link>
    </div>
  );
};

export default AdminPage;
