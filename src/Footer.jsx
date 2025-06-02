import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import logo from "./img/logo.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer-bg">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Link to="/hospital">
                <img src={logo} alt="logo" />
              </Link>
              <p>Sizin sağlamlığınız bizim üçün prioritetdir.</p>
            </div>
            <div className="block">
              <p>Məlumatlar</p>
              <Link to="/hospital/about">Haqqımızda</Link>
              <Link to="/hospital/doctors">Həkimlər</Link>
              <Link to="/hospital/news">Xəbərlər</Link>
            </div>
            <div className="block">
              <p>Xidmətlər</p>
              <Link to="/hospital/services">Şöbələr</Link>
              <Link to="/hospital/promotions">Aksiyalar</Link>
            </div>
            <div className="block block-contact">
              <p>Əlaqə</p>
              <p>
                <FaPhone />
                +994(12)3456789
              </p>
              <p>
                <IoIosMail />
                info@hospital.az
              </p>
              <p>
                <FaLocationDot />
                Bakı,Azərbaycan
              </p>
              <div className="contact-icons">
                <Link to="https://instagram.com/">
                  <FaInstagram className="contact-icon" />
                </Link>
                <Link to="https://facebook.com/">
                  <FaFacebookF className="contact-icon" />
                </Link>
                <Link to="https://whatsapp.com/">
                  <FaWhatsapp className="contact-icon" />
                </Link>
                <Link to="https://linkedin.com/">
                  <FaLinkedinIn className="contact-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
