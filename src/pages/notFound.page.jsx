import React from 'react';
import { LinkWithLine } from '../components/layout/link-with-line';
import { Stack } from '@mui/joy';

export const NotFoundPage = () => {
  return (
    <Stack id="container">
      <div>
        <h1>404</h1>

        <h2>Oops! Página não encontrada.</h2>
      </div>

      <p>Não conseguimos encontrar a página que tentou aceder.</p>

      <div>
        <LinkWithLine
          to="/"
          children="Aceder à página principal"
          className="line"
        />
      </div>
    </Stack>
  );
};
