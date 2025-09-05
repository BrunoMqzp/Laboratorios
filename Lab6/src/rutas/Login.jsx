import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setIsAuth }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '1234') {
      setIsAuth(true);
      navigate('/home');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '3rem auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="admin"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
          required
        />
        <input
          type="password"
          placeholder="1234"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          required
        />
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
        <button type="submit" className="btn">Entrar</button>
      </form>
    </div>
  );
}