import React from "react";
import "./ConfirmationPage.scss";
import { useLocation } from "react-router-dom";
import accountIcon from "../../assets/icon/account.png";
import notificationIcon from "../../assets/icon/notification.png";
import inboxIcon from "../../assets/icon/mail-inbox-app.png";
import searchIcon from "../../assets/icon/search-interface-symbol.png";

const ConfirmationPage = () => {
  const location = useLocation();
  const bookingDetails = location.state;
  console.log(bookingDetails);

  return (
    <>
      <div className="confirmation">
        <h2 className="confirmation__header">Booking Confirmation</h2>
        <span className="confirmation__label">Name: {bookingDetails.name}</span>
        <span className="confirmation__label">Date: {bookingDetails.date}</span>
        <span className="confirmation__label">Time: {bookingDetails.time}</span>
        <span className="confirmation__label">
          Guests: {bookingDetails.guests}
        </span>
        <span className="confirmation__message">
          Your table has been successfully booked. We look forward to seeing
          you!
        </span>
      </div>
      <div className="home-footer">
        <div className="home-footer__container">
          <div>
            <img className="home-footer__icon" src={searchIcon} />
          </div>

          <div>
            <img className="home-footer__icon" src={inboxIcon} />
          </div>
          <div>
            <img className="home-footer__icon" src={notificationIcon} />
          </div>
          <div>
            <img className="home-footer__icon" src={accountIcon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
