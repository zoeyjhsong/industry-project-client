import "./NavModal.scss";
import React from "react";
import { Link } from "react-router-dom";
import crossIcon from "../../assets/icon/cross.png";

const NavModal = ({ onClose }) => {
  return (
    <div className="nav-modal__overlay">
      <div className="nav-modal">
        <div className="nav-modal__container">
          <img className="cross-icon" onClick={onClose} src={crossIcon} />

          <ul className="nav-modal__list-container">
            <li>
              <Link className="nav-modal__list" to="/" onClick={onClose}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-modal__list" to="/login" onClick={onClose}>
                Log In
              </Link>
            </li>
            <li>
              <Link className="nav-modal__list" to="/booking" onClick={onClose}>
                Book a Table
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavModal;
