import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const SignupPage = () => {
  // const { signup } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Create an account</h2>

      <div>
        <label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Full name"
            required
          />
        </label>

        <label>
          <input
            type="email"
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

        <label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Confirm Password"
            required
          />
        </label>
      </div>

      <button type="submit">Sign Up</button>

      <div>
        <p>Already have an account?</p>
        <Link to="/login">
          <p>Log in</p>
        </Link>
      </div>
    </form>
  );
};

export default SignupPage;