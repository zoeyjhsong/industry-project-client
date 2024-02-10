import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const bookingDetails = location.state;

  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Name: {bookingDetails.name}</p>
      <p>Date: {bookingDetails.date}</p>
      <p>Time: {bookingDetails.time}</p>
      <p>Guests: {bookingDetails.guests}</p>
      <p>Your table has been successfully booked. We look forward to seeing you!</p>
    </div>
  );
}

export default ConfirmationPage;