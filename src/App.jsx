import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/auths/LoginPage";
import SignupPage from "./pages/auths/SignupPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/homepage" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
