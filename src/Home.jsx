// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Departments from "./Departments";
import building from "./img/building2.svg";
import {
  FaUserCheck,
  FaShieldAlt,
  FaUserMd,
  FaMicroscope,
  FaStethoscope,
  FaAmbulance,
} from "react-icons/fa";
import poster1 from "./img/promotion1.svg";
import poster2 from "./img/promotion3.svg";
import poster3 from "./img/promotion4.svg";
import poster4 from "./img/promotion5.svg";

const Home = () => {
  const info = [
    {
      id: 1,
      reason: "Xəstələrə fərdi yanaşma",
      icon: <FaUserCheck className="info-icon" />,
    },
    {
      id: 2,
      reason: "Rahatlıq və təhlükəsizlik",
      icon: <FaShieldAlt className="info-icon" />,
    },
    {
      id: 3,
      reason: "Təcrübəli kadrlar",
      icon: <FaUserMd className="info-icon" />,
    },
    {
      id: 4,
      reason: "İnnovativ avadanlıqlar",
      icon: <FaMicroscope className="info-icon" />,
    },
    {
      id: 5,
      reason: "Geniş ixtisaslı xidmət sahələri",
      icon: <FaStethoscope className="info-icon" />,
    },
    {
      id: 6,
      reason: "24/7 təcili tibbi yardım",
      icon: <FaAmbulance className="info-icon" />,
    },
  ];
  const posters = [
    {
      id: 1,
      img: poster1,
    },
    {
      id: 2,
      img: poster2,
    },
    {
      id: 3,
      img: poster3,
    },
    {
      id: 4,
      img: poster4,
    },
  ];
  return (
    <div className="home">
      <main>
        <section>
          <div className="section1">
            <div className="container">
              <div className="section1-content">
                <h1>Sağlam Gələcək, Sağlam Həyat</h1>
                <p>Sizin sağlamlığınız bizim üçün prioritetdir.</p>
                <Link to="/hospital/online-request" className="btn-link">
                  Qəbula yazıl
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section2">
            <h2 className="dep">Şöbələrimiz</h2>
            <div className="dep-container">
              <Departments />
            </div>
          </div>
        </section>
        <section>
          <div className="section3">
            <div className="container">
              <div className="about-section">
                <div>
                  <h2>Haqqımızda</h2>
                  <p className="about-info">
                    Klinikamız 2020-cu ildən fəaliyyət göstərir və məqsədimiz
                    pasiyentlərə yüksək səviyyəli, müasir və etibarlı tibbi
                    xidmətlər təqdim etməkdir. Peşəkar həkim heyətimiz və son
                    texnologiyalara əsaslanan avadanlıqlarımızla sağlamlığınızı
                    güvənlə bizə əmanət edə bilərsiniz.
                  </p>
                  <Link to="/hospital/about">Ətraflı</Link>
                </div>
                <div className="about-building">
                  <img src={building} alt="building" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section-info">
            <div className="info">
              <h1>13</h1>
              <h1>Şobə</h1>
            </div>
            <div className="info">
              <h1>3</h1>
              <h1 style={{ width: "100px" }}>Tibbi mərkəz</h1>
            </div>
            <div className="info">
              <h1>260</h1>
              <h1>Həkim</h1>
            </div>
            <div className="info">
              <h1>351782</h1>
              <h1> Pasiyent</h1>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="why-us">
              <h2>Üstünlükərimiz</h2>
              <div className="info-all">
                {info.map((info) => (
                  <div className="info-card" key={info.id}>
                    <h3>{info.reason}</h3>
                    <div>{info.icon}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="promotions-section">
            <div className="container">
              <h2>Aksiyalarımız</h2>
              <div className="promotions">
                {posters.map((post) => (
                  <div key={post.id} className="post">
                    <img src={post.img} alt="poster" />
                    <Link to="/hospital/promotions">Ətraflı</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
