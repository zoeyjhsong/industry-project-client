import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: '',
    name: '',
    zip: ''
  });
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate payment process
    try {
      // Simulate successful payment
      // call your payment API
      setIsPaymentSuccessful(true);
      // Open the modal for successful payment
      setIsModalOpen(true);
      // Delay redirect to Confirmation Page for 2 seconds
      setTimeout(() => {
        // Pass booking details to ConfirmationPage upon successful payment
        navigate('/confirmation', { state: formData });
      }, 2000);
    } catch (error) {
      console.error('Error processing payment:', error);
      // Handle payment failure
      alert('Payment failed. Please try again.');
    }
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
      {/* Modal for payment success */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Payment successful!</h3>
        <p>Your payment was successfully processed.</p>
      </Modal>
    </div>
  );
}

export default PaymentPage;