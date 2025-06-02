import React from "react";
import "./Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "./img/logo.svg";

const Navbar = () => {
  const location = useLocation();

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
                className={` account-link ${
                  isAccountActive ? "active-account" : ""
                }`}
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
