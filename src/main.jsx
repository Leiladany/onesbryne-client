import './main.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './router/app.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/auth.context.jsx';
import { CssVarsProvider } from '@mui/joy/styles';
import { theme } from './components/theme/theme.js';
import { ToastContainer } from 'react-toastify';
import { CssBaseline } from '@mui/joy';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      <BrowserRouter>
        <AuthContextProvider>
          <App />
          <ToastContainer theme='dark' />
        </AuthContextProvider>
      </BrowserRouter>
    </CssVarsProvider>
  </React.StrictMode>,
);
