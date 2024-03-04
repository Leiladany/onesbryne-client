import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/auths/Login/LoginPage";
import SignupPage from "./pages/auths/SignUp/SignupPage";
import HomePage from "./pages/home/HomePage";
import AllClothes from "./pages/allclothes/AllClothes";
import ClothesGrid from "./pages/clothesgrid/ClothesGrid";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/homepage" element={<Navigate to="/" />} />
        <Route path="/allclothes" element={<AllClothes />} />
        <Route path="/clothes" element={<ClothesGrid />} />
      </Routes>
    </div>
  );
}

export default App;
