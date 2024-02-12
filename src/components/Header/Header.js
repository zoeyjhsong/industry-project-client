import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/logo/logo.png";
import menuIcon from "../../assets/icon/menu.png";
import { useNavigate } from "react-router-dom";
import NavModal from "../NavModal/NavModal";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header__container">
        <img className="header__logo" onClick={handleClick} src={logo} />
        <div className="header__menu-icon-container" onClick={toggleMenu}>
          <img className="header__menu-icon" src={menuIcon} alt="Menu Icon" />
        </div>
      </div>
      {isMenuOpen && <NavModal onClose={toggleMenu} />}
    </div>
  );
};

export default Header;
