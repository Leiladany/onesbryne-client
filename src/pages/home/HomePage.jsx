/* eslint-disable react/no-unescaped-entities */
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="about-container">
        <h2>O que é ?</h2>
        <h3>Uma loja de venda de roupa em 2º mão !</h3>
      </div>
      <div className="center-container">
        <div className="explain-container">
          <div className="step1">
            <div className="icon-container">
              <img src="/icon-1.png" alt="Description of the image" />
            </div>
            <div className="disc-container">
              <h2>Criar o teu perfil</h2>
              <h3>
                Cria o teu perfil para guardares as tuas peças de roupa
                favoritas e poderes contactar o vendedor.
              </h3>
            </div>
          </div>
          <div className="step2">
            <div className="icon-container">
              <img src="/icon-2.png" alt="Description of the image" />
            </div>
            <div className="disc-container">
              <h2>Procura a roupa que queres</h2>
              <h3>
                Explora nosso catálogo, caso não queira comprometer-se já,
                guarde nos favoritos.
              </h3>
            </div>
          </div>
          <div className="step3">
            <div className="icon-container">
              <img src="/icon-3.png" alt="Description of the image" />
            </div>
            <div className="disc-container">
              <h2>Veja os detalhes da peça que gostou.</h2>
              <h3>
                Clique nas peça que lhe chamou mais a atenção, caso seja do seu
                agrado contacte o vendedor.
              </h3>
            </div>
          </div>
          <div className="step4">
            <div className="icon-container">
              <img src="/icon-4.png" alt="Description of the image" />
            </div>
            <div className="disc-container">
              <h2>Mande email ao vendedor</h2>
              <h3>
                Para finalizar clique em "Contactar Vendedor" e escreva um email
                com o código da peça.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonHome-container">
        <Link to="/allclothes">
        <button>Explorar</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
