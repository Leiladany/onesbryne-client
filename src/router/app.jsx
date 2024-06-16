import { Navigate, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Navbar } from '../components/navigation/navbar';
import { Footer } from '../components/navigation/footer';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { SignupPage } from '../pages/signup.page';
import { GuidePage } from '../pages/guide.page';
import { ClothesTypePage } from '../pages/clothes.type.page';
import { ClothesDetailsPage } from '../pages/clothes.details.page';
import { FavouritesPage } from '../pages/favourites.page';
import { ProfilePage } from '../pages/profile.page';
import { AdminPage } from '../pages/admin.page';
import { NewProductPage } from '../pages/newProduct.page';
import { AppContainer, RoutesContainer } from '../components/layout/containers';

export const App = () => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  return (
    <AppContainer>
      <Navbar />

      <RoutesContainer>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/guide" element={<GuidePage />} />
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
          <Route path="*" element={<Navigate to={'/home'} />} />
        </Routes>
      </RoutesContainer>

      <Footer />
    </AppContainer>
  );
};
