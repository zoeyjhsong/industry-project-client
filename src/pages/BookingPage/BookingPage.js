import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to confirmation page with booking details
    navigate('/confirmation', { state: formData });
  }

  const { name, date, time, guests } = formData;

  return (
    <div>
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" value={date} onChange={handleChange} />
        </label>
        <br />
        <label>
          Time:
          <input type="time" name="time" value={time} onChange={handleChange} />
        </label>
        <br />
        <label>
          Guests:
          <input type="number" name="guests" value={guests} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Book Table</button>
      </form>
    </div>
  );
}

export default BookingPage;