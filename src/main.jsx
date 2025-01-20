import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastProvider } from './components/ToastContext';
import { UserAuthProvider } from './auth/UserAuthContext';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
      <UserAuthProvider>
        <App />
      </UserAuthProvider>
    </ToastProvider>
  </React.StrictMode>
);
