import "./app.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

import Navbar from "./components/ui-layout/navbar/Navbar";
import Footer from "./components/ui-layout/footer/Footer";
import Sidebar from "./components/ui-layout/sidebar/Sidebar";

import LoginPage from "./pages/auths/login/LoginPage";
import SignupPage from "./pages/auths/signup/SignupPage";
import HomePage from "./pages/home/HomePage";

import ClothesPage from "./pages/clothes/ClothesPage";
import ClothesTypePage from "./pages/clothesType/ClothesTypePage";
import ClothesDetailsPage from "./pages/clothesDetails/ClothesDetailsPage";
import FavouritesPage from "./pages/favourites/FavouritesPage";
import ProfilePage from "./pages/profile/ProfilePage";

import AdminPage from "./pages/admin/AdminPage";
import AddOrEditProductPage from "./pages/admin/AddOrEditProductPage";

import NotFoundPage from "./pages/404/NotFoundPage";

function App() {
  const location = useLocation();
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  const showSidebar = location.pathname.startsWith("/clothes/");

  return (
    <div className="app-container">
      <Navbar />

      {showSidebar && <Sidebar />}

      <div className="app-content-container">
        <Routes>
          {!isAuthenticated ? (
            <>
              {/* Non-authenticated routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </>
          ) : (
            <>
              {/* Common authenticated routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/clothes" element={<ClothesPage />} />
              <Route path="/clothes/:type" element={<ClothesTypePage />} />
              <Route
                path="/clothes/:type/:details"
                element={<ClothesDetailsPage />}
              />
              <Route path="/favourites" element={<FavouritesPage />} />
              <Route path="/profile" element={<ProfilePage />} />

              {/* Admin route */}
              {isAdmin && (
                <>
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/admin/add" element={<AddOrEditProductPage />} />
                  <Route path="/admin/edit/:productId" element={<AddOrEditProductPage />} />
                </>
              )}

              {/* Fallback route */}
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
