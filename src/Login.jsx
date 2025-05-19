import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake login validation
    if (form.username === 'student' && form.password === 'password') {
      onLogin(form.username, () => {
        navigate('/');
      });
    } else {
      setError('Invalid username or password');
    }
  };
  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input name="username" value={form.username} onChange={handleChange} required />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Password: </label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Use username: <b>student</b> and password: <b>password</b> to login.</p>
    </div>
  );
}

export default Login;
