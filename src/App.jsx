import "./app.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import NotFoundPage from "./pages/404/NotFoundPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import LoginPage from "./pages/auths/login/LoginPage";
import SignupPage from "./pages/auths/signup/SignupPage";
import HomePage from "./pages/home/HomePage";
import Clothes from "./pages/clothes/Clothes";
import ClothesType from "./pages/clothesType/ClothesType";
import ClothesDetails from "./pages/details/Details";
import Favourites from "./pages/favourites/Favourites";
import Profile from "./pages/profile/Profile";

function App() {
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);

  const showSidebar = location.pathname.startsWith("/clothes/");

  return (
    <div className="app-container">
      <Navbar />

      {showSidebar && <Sidebar />}

      <div className="app-content-container">
        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/clothes" element={<Clothes />} />
              <Route path="/clothes/:type" element={<ClothesType />} />
              <Route
                path="/clothes/:type/:details"
                element={<ClothesDetails />}
              />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFoundPage />} />
            </>
          )}
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
