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
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3>You are logged in as {user?.username}</h3>
        <p>Feel free to explore personalized features in other tools!</p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ 
        maxWidth: '300px', 
        margin: '0 auto', 
        textAlign: 'center' 
      }}
    >
      <label 
        htmlFor="username" 
        style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          fontWeight: '500' 
        }}
      >
        <span role="img" aria-label="user" style={{ marginRight: '0.5rem' }}>
          👤
        </span>
        Enter Username
      </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75rem',
          marginBottom: '1rem',
          border: '1px solid #ccc',
          borderRadius: '6px',
          fontSize: '1rem',
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: '#7b3fe4',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '0.75rem 1rem',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '600'
        }}
      >
        Login
      </button>
    </form>
  );
}
