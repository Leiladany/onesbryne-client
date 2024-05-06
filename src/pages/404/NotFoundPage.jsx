import "./NotFoundPage.css";
import React from "react";
import Link from "../../components/layout/LinkComponentWithLine";
import { Stack } from "@mui/joy";

const NotFoundPage = () => {
  return (
    <Stack id="container">
      <div className="notFound-title">
        <h1>404</h1>

        <h2>Oops! Página não encontrada.</h2>
      </div>

      <p>Não conseguimos encontrar a página que tentou aceder.</p>

      <div className="notFound-link-container">
        <Link to="/" children="Aceder à página principal" className="line"/>
      </div>
    </Stack>
  );
};

export default NotFoundPage;
