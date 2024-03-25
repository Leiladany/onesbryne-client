import './favorites.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Favorites = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <p>It looks like you don't have anything here yet.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
