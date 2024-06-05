import './app.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Navbar from './components/navigation/navbar/Navbar';
import Footer from './components/navigation/footer/Footer';
import Sidebar from './components/navigation/sidebar/Sidebar';
import LoginPage from './pages/auths/LoginPage';
import SignupPage from './pages/auths/SignupPage';
import HomePage from './pages/home/HomePage';
import ClothesPage from './pages/clothes/ClothesPage';
import ClothesTypePage from './pages/clothesType/ClothesTypePage';
import ClothesDetailsPage from './pages/clothesDetails/ClothesDetailsPage';
import FavouritesPage from './pages/favourites/FavouritesPage';
import ProfilePage from './pages/profile/ProfilePage';
import AdminPage from './pages/admin/AdminPage';
import AddOrEditProductPage from './pages/admin/AddOrEditProductPage';

import NotFoundPage from './pages/404/NotFoundPage';

function App() {
  const location = useLocation();
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  const showSidebar = location.pathname.startsWith('/clothes/');

  return (
    <div className="app-container">
      <Navbar />

      <div className="app-content-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/clothes" element={<ClothesPage />} />
          <Route path="/clothes/:type" element={<ClothesTypePage />} />
          <Route
            path="/clothes/:type/:productId"
            element={<ClothesDetailsPage />}
          />
          {isAuthenticated && (
            <>
              <Route path="/favourites" element={<FavouritesPage />} />
              <Route path="/profile" element={<ProfilePage />} />

              {isAdmin && (
                <>
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/admin/add" element={<AddOrEditProductPage />} />
                  <Route
                    path="/admin/edit/:productId"
                    element={<AddOrEditProductPage />}
                  />
                </>
              )}
            </>
          )}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
