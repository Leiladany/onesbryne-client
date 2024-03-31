import "./NotFoundPage.css";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="notFound-container">
      <div className="notFound-title">
        <h1>404</h1>

        <h2>Oops! Página não encontrada.</h2>
      </div>

      <p>Não conseguimos encontrar a página que tentou aceder.</p>

      <div className="notFound-link-container">
        <Link to="/" className="notFound-link">
          Aceder à página principal
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
