import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastProvider } from './components/ToastContext';
import { UserAuthProvider } from './auth/UserAuthContext';
import { AnalyticsProvider } from './analytics/AnalyticsContext';
import { ThemeProvider } from './theme/ThemeContext';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
      <UserAuthProvider>
        <AnalyticsProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </AnalyticsProvider>
      </UserAuthProvider>
    </ToastProvider>
  </React.StrictMode>
);
