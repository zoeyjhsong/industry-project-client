import React from "react";
import "./Homepage.scss";
import { NavLink } from "react-router-dom";
import accountIcon from "../../assets/icon/account.png";
import notificationIcon from "../../assets/icon/notification.png";
import inboxIcon from "../../assets/icon/mail-inbox-app.png";
import searchIcon from "../../assets/icon/search-interface-symbol.png";

const Homepage = () => {
  return (
    <>
      <div className="hero">
        <h1 className="hero__header">Let's Book a Table For You</h1>
        <div className="hero__img"></div>

        <NavLink className="hero__button-link" to="/booking">
          <div className="hero__button">Find a Table</div>
        </NavLink>
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

export default Homepage;
