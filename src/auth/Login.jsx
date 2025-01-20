import React, { useState } from 'react';
import { useUserAuth } from './UserAuthContext';
import '../styles/global.scss';

export default function Login() {
  const [username, setUsername] = useState('');
  const { login, isLoggedIn, user } = useUserAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username.trim());
      setUsername('');
    }
  };

  if (isLoggedIn) {
    return (
      <div style={{ padding: '1rem' }}>
        <h3>You are logged in as {user?.username}</h3>
        <p>Feel free to explore personalized features in other tools!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1rem', maxWidth: '300px' }}>
      <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem' }}>
        Enter Username
      </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          width: '100%',
          padding: '0.5rem',
          marginBottom: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: '#7b3fe4',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
        }}
      >
        Login
      </button>
    </form>
  );
}
