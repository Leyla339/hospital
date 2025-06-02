import React from "react";
import "./Account.css";
import { Link, useNavigate } from "react-router-dom";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoFolderSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Account = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/hospital/auth");
  };

  const appointments = [
    {
      doctor: "Dr. Aysel Məmmədova",
      date: "30 may 2025",
      time: "10:00 AM",
      status: "Təsdiqlənib",
    },
    {
      doctor: "Dr. Tural İsmayılov",
      date: "7 iyun 2025",
      time: "14:00 PM",
      status: "Planlaşdırılıb",
    },
    {
      doctor: "Dr. Günel Həsənova",
      date: "10 iyun 2025",
      time: "11:30 AM",
      status: "Planlaşdırılıb",
    },
  ];

  return (
    <div className="account">
      <div className="left-side">
        <div className="container">
          <h1 className="left-header">Şəxsi Kabinet</h1>
          <div className="left-links">
            <Link to="#">
              <LuLayoutPanelLeft />
              Nəzarət paneli
            </Link>
            <Link to="#">
              <RiCalendarScheduleFill />
              Tədbir görüşləri
            </Link>
            <Link to="#">
              <IoFolderSharp />
              Tibb qeydiyyatları
            </Link>
            <Link to="#">
              <IoMdSettings />
              Parametrlər
            </Link>
          </div>
          <button onClick={handleLogout} className="log-out">
            Çıxış
          </button>
        </div>
      </div>

      <div className="right-side">
        <div className="container">
          <h1>
            Xoş gəldiniz, {currentUser.name} {currentUser.surname}
          </h1>

          <div className="stats">
            <div className="stat-box">
              <p className="stat-count">3</p>
              <p className="stat-label">Randevularım</p>
            </div>
            <div className="stat-box">
              <p className="stat-count">0</p>
              <p className="stat-label">Test nəticələrim</p>
            </div>
            <div className="stat-box">
              <p className="stat-count">0</p>
              <p className="stat-label">Diaqnozlarım</p>
            </div>
            <div className="stat-box">
              <p className="stat-count">0</p>
              <p className="stat-label">Müalicəm</p>
            </div>
          </div>

          <div className="appointments">
            <h2>Tədbir görüşlərim</h2>
            <table>
              <thead>
                <tr>
                  <th>Həkim</th>
                  <th>Tarix</th>
                  <th>Saat</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt, index) => (
                  <tr key={index}>
                    <td>{appt.doctor}</td>
                    <td>{appt.date}</td>
                    <td>{appt.time}</td>
                    <td>
                      <span className="status-badge">{appt.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
