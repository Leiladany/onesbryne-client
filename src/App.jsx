import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auths/LoginPage"
import SignupPage from "./pages/auths/SignupPage"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
