import React, { useState, useContext } from "react";
import "./Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "./img/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "./AuthContext"; 

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); 

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

              {user ? (
                <>
                  <NavLink
                    to="/hospital/account"
                    className={`account-link ${
                      location.pathname === "/hospital/account"
                        ? "active-account"
                        : ""
                    }`}
                  >
                    Şəxsi kabinet
                  </NavLink>
                  <button className="logout-btn" onClick={logout}>
                    Çıxış
                  </button>
                </>
              ) : (
                <NavLink
                  to="/hospital/auth"
                  className={`account-link ${
                    location.pathname === "/hospital/auth"
                      ? "active-account"
                      : ""
                  }`}
                >
                  Şəxsi kabinet
                </NavLink>
              )}
            </div>

            <div className="burger-menu" onClick={() => setMenuOpen(true)}>
              <RxHamburgerMenu size={28} />
            </div>

            <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
              <div className="nav-close-btn" onClick={() => setMenuOpen(false)}>
                <IoMdClose className="mav-close-icon" />
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
              <div className="account-settings">
                {user ? (
                  <>
                    <NavLink
                      to="/hospital/account"
                      className={`account-link ${
                        location.pathname === "/hospital/account"
                          ? "active-account"
                          : ""
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      Şəxsi kabinet
                    </NavLink>
                    <button
                      className="logout-btn"
                      onClick={() => {
                        logout();
                        setMenuOpen(false);
                      }}
                    >
                      Çıxış
                    </button>
                  </>
                ) : (
                  <NavLink
                    to="/hospital/auth"
                    className={`account-link ${
                      location.pathname === "/hospital/auth"
                        ? "active-account"
                        : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Şəxsi kabinet
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
