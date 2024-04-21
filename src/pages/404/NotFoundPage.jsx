import "./NotFoundPage.css";
import React from "react";
import LinkControl from "../../components/ui-controls/link/Link";

const NotFoundPage = () => {
  return (
    <div id="page-container">
      <div className="notFound-title">
        <h1>404</h1>

        <h2>Oops! Página não encontrada.</h2>
      </div>

      <p>Não conseguimos encontrar a página que tentou aceder.</p>

      <div className="notFound-link-container">
        <LinkControl to="/" children="Aceder à página principal" className="line"/>
      </div>
    </div>
  );
};

export default NotFoundPage;
