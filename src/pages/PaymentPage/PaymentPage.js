import React, { useState } from 'react';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: '',
    name: '',
    zip: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment submitted!');
    // Reset form after submission
    setFormData({
      cardNumber: '',
      expMonth: '',
      expYear: '',
      cvc: '',
      name: '',
      zip: ''
    });
  }

  const { cardNumber, expMonth, expYear, cvc, name, zip } = formData;

  return (
    <div>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input type="text" name="cardNumber" value={cardNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Expiry Month:
          <input type="text" name="expMonth" value={expMonth} onChange={handleChange} />
        </label>
        <br />
        <label>
          Expiry Year:
          <input type="text" name="expYear" value={expYear} onChange={handleChange} />
        </label>
        <br />
        <label>
          CVC:
          <input type="text" name="cvc" value={cvc} onChange={handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <br />
        <label>
          ZIP:
          <input type="text" name="zip" value={zip} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentPage;