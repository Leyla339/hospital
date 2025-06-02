import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "./img/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io"; // bağlama ikonu üçün

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isAccountActive =
    location.pathname === "/register" ||
    location.pathname === "/log-in" ||
    location.pathname === "/account";

  return (
    <div className="navbar">
      <header>
        <div className="container">
          <div className="nav-content">
            <Link to="/hospital">
              <img src={logo} alt="logo" className="logo" />
            </Link>

            <div className="nav-links">
              <NavLink to="/hospital/about">Haqqımızda</NavLink>
              <NavLink to="/hospital/services">Şöbələr</NavLink>
              <NavLink to="/hospital/doctors">Həkimlər</NavLink>
              <NavLink to="/hospital/news">Xəbərlər</NavLink>
              <NavLink to="/hospital/contact">Əlaqə</NavLink>
              <NavLink to="/hospital/online-request">Qəbula yazıl</NavLink>
              <NavLink
                to="/hospital/auth"
                className={`account-link ${
                  isAccountActive ? "active-account" : ""
                }`}
              >
                Şəxsi kabinet
              </NavLink>
            </div>

            <div className="burger-menu" onClick={() => setMenuOpen(true)}>
              <RxHamburgerMenu size={28} />
            </div>

            <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
              <div className="close-btn" onClick={() => setMenuOpen(false)}>
                <IoMdClose className="close-icon" />
              </div>
              <NavLink to="/hospital/about" onClick={() => setMenuOpen(false)}>
                Haqqımızda
              </NavLink>
              <NavLink
                to="/hospital/services"
                onClick={() => setMenuOpen(false)}
              >
                Şöbələr
              </NavLink>
              <NavLink
                to="/hospital/doctors"
                onClick={() => setMenuOpen(false)}
              >
                Həkimlər
              </NavLink>
              <NavLink to="/hospital/news" onClick={() => setMenuOpen(false)}>
                Xəbərlər
              </NavLink>
              <NavLink
                to="/hospital/contact"
                onClick={() => setMenuOpen(false)}
              >
                Əlaqə
              </NavLink>
              <NavLink
                to="/hospital/online-request"
                onClick={() => setMenuOpen(false)}
              >
                Qəbula yazıl
              </NavLink>
              <NavLink
                to="/hospital/auth"
                className={`account-link ${
                  isAccountActive ? "active-account" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Şəxsi kabinet
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
