import React, { useEffect, useState } from "react";
import "../style/Nav.css";
import logo from "../images/netflixLogo.png";
import profil from "../images/profil.png";
const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"} `}>
      <div className="nav__contents">
        <img className="nav__logo" src={logo} alt="netflix logo" />
        <img className="nav__avatar" src={profil} alt="profil netflix logo" />
      </div>
    </div>
  );
};

export default Nav;
