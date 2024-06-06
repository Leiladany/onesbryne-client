import './app.css';
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Navbar } from '../components/navigation/navbar';
import { Footer } from '../components/navigation/footer';
import { LoginPage } from '../pages/login.page';
import { SignupPage } from '../pages/signup.page';
import { HomePage } from '../pages/home.page';
import { ClothesPage } from '../pages/clothes.carousel.page';
import { ClothesTypePage } from '../pages/clothes.type.page';
import { ClothesDetailsPage } from '../pages/clothes.details.page';
import { FavouritesPage } from '../pages/favourites.page';
import { ProfilePage } from '../pages/profile.page';
import { AdminPage } from '../pages/admin.page';
import { AddOrEditProductPage } from '../pages/addEditProduct.page';
import { NotFoundPage } from '../pages/notFound.page';

export const App = () => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

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
};
