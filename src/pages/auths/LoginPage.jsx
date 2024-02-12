import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  // const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Log in to Fin/Ace</h2>

      <div className="auths-form-inputs">
        <label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            required
          />
        </label>

        <label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
          />
        </label>
      </div>

      <button>Log In</button>

      <div>
        <p>Not registered?</p>

        <Link to="/signup">
          <p>Create an account</p>
        </Link>
      </div>
    </form>
  );
};

export default Login;
