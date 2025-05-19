import React, { useState } from 'react';

function Payment() {
  const [form, setForm] = useState({ cardNumber: '', expiry: '', cvv: '' });
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake payment processing
    setMessage('Payment processed successfully!');
    setForm({ cardNumber: '', expiry: '', cvv: '' });
  };
  return (
    <div style={{ padding: 20 }}>
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Number: </label>
          <input name="cardNumber" value={form.cardNumber} onChange={handleChange} required maxLength={16} />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Expiry Date: </label>
          <input name="expiry" value={form.expiry} onChange={handleChange} placeholder="MM/YY" required maxLength={5} />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>CVV: </label>
          <input name="cvv" value={form.cvv} onChange={handleChange} required maxLength={3} />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Pay</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
}

export default Payment;
