import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState('');
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake contact submission
    setResponse('Thank you for contacting us!');
    setForm({ name: '', email: '', message: '' });
  };
  return (
    <div style={{ padding: 20 }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Email: </label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Message: </label>
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Send</button>
      </form>
      {response && <p style={{ color: 'green' }}>{response}</p>}
    </div>
  );
}

export default Contact;
