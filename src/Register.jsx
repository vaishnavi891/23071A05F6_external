import React, { useState } from 'react';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send data to backend
    setMessage("User " + form.username + " registered successfully!");
    setForm({ username: '', password: '' });
  };
  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input name="username" value={form.username} onChange={handleChange} required />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Password: </label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Register</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
}

export default Register;
