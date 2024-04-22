/* eslint-disable react/no-unescaped-entities */
import "./HomePage.css";
import LinkComponent from "../../components/layout/link/Link";
import homeIcon1 from "../../assets/home-icon-1.png"
import homeIcon2 from "../../assets/home-icon-2.png"
import homeIcon3 from "../../assets/home-icon-3.png"
import homeIcon4 from "../../assets/home-icon-4.png"

function HomePage() {
  return (
    <div id="page-container">
      <div className="about-container">
        <h2>O que é ?</h2>
        <h3>Uma loja de venda de roupa em 2º mão !</h3>
      </div>

      <div className="center-container">
        <div className="explain-container">
          <div className="step1">
            <div className="icon-container">
              <img src={homeIcon1} alt="Home Icon 1" />
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
              <img src={homeIcon2} alt="Home Icon 2" />
            </div>

            <div className="disc-container">
              <h2>Procura a roupa que queres</h2>

              <h3>
                Explora o nosso catálogo, caso não queiras comprometer-te já,
                guarda nos favoritos.
              </h3>
            </div>
          </div>

          <div className="step3">
            <div className="icon-container">
              <img src={homeIcon3} alt="Home Icon 3" />
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
              <img src={homeIcon4} alt="Home Icon 4" />
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

      <div className="home-link-container">
        <LinkComponent to="/clothes" children="Explorar" className="box" />
      </div>
    </div>
  );
}

export default HomePage;
