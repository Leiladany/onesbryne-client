import './main.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './router/app.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/auth.context.jsx';
import { ThemeProvider } from '@mui/joy/styles';
import { theme } from './components/theme/theme.js';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthContextProvider>
          <App />
          <ToastContainer />
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
