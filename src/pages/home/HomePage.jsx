import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="about-container">
        <h2>O que é ?</h2>
        <h3>Uma loja de venda de roupa em 2º mão !</h3>
      </div>
      <div className="explain-container">
        <div className="step1">
          <div className="icon-container">
            <img src="/icon-1.png" alt="Description of the image" />
          </div>
          <div className="disc-container">
            <h2>Criar o teu perfil</h2>
            <h3>
              Cria o teu perfil para guardares as tuas peças de roupa favoritas
              e poderes contactar o vendedor.
            </h3>
          </div>
        </div>
        <div className="step2">
          <div className="icon-container">
            <img src="/icon-2.png" alt="Description of the image" />
          </div>
          <div className="disc-container">
            <h2>Criar o teu perfil</h2>
            <h3>
              Cria o teu perfil para guardares as tuas peças de roupa favoritas
              e poderes contactar o vendedor.
            </h3>
          </div>
        </div>
        <div className="step3">
          <div className="icon-container">
            <img src="/icon-3.png" alt="Description of the image" />
          </div>
          <div className="disc-container">
            <h2>Criar o teu perfil</h2>
            <h3>
              Cria o teu perfil para guardares as tuas peças de roupa favoritas
              e poderes contactar o vendedor.
            </h3>
          </div>
        </div>
        <div className="step4">
          <div className="icon-container">
            <img src="/icon-4.png" alt="Description of the image" />
          </div>
          <div className="disc-container">
            <h2>Criar o teu perfil</h2>
            <h3>
              Cria o teu perfil para guardares as tuas peças de roupa favoritas
              e poderes contactar o vendedor.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
