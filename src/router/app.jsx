import './app.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Navbar } from '../components/navigation/navbar';
import { Footer } from '../components/navigation/footer';
import { LoginPage } from '../pages/login.page';
import { SignupPage } from '../pages/signup.page';
import { GuidePage } from '../pages/guide.page';
import { ClothesPage } from '../pages/clothes.carousel.page';
import { ClothesTypePage } from '../pages/clothes.type.page';
import { ClothesDetailsPage } from '../pages/clothes.details.page';
import { FavouritesPage } from '../pages/favourites.page';
import { ProfilePage } from '../pages/profile.page';
import { AdminPage } from '../pages/admin.page';
import { NewProductPage } from '../pages/newProduct.page';

export const App = () => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  return (
    <div className="app-container">
      <Navbar />

      <div className="app-content-container">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/guide" element={<GuidePage />} />
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
                  <Route path="/admin/add" element={<NewProductPage />} />
                  <Route
                    path="/admin/edit/:productId"
                    element={<NewProductPage />}
                  />
                </>
              )}
            </>
          )}
          <Route path="*" element={<Navigate to={'/clothes'} />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};
