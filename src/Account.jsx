import React, { useContext, useEffect, useState } from "react";
import "./Account.css";
import { Link, useNavigate } from "react-router-dom";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoFolderSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { AuthContext } from "./AuthContext";
import { RiDeleteBin6Line } from "react-icons/ri";

const Account = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/hospital/auth");
      return;
    }

    fetch("https://683ca83f199a0039e9e310e7.mockapi.io/api/hospital/requests")
      .then((res) => res.json())
      .then((data) => {
        console.log("Bütün randevular:", data);
        const userAppointments = data.filter(
          (appt) => appt.email === user.email
        );
        console.log("Filtrlənmiş randevular:", userAppointments);
        setAppointments(userAppointments);
      })
      .catch((error) => console.error("Randevu məlumatı alınmadı:", error));
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/hospital/auth");
  };

  if (!user) return null; // Yoxlama tamamlanana kimi heç nə göstərməmək üçün
  const handleDelete = (id) => {
    if (!window.confirm("Randevunu silmək istədiyinizə əminsiniz?")) return;

    fetch(
      `https://683ca83f199a0039e9e310e7.mockapi.io/api/hospital/requests/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Xəta baş verdi");
        setAppointments((prev) => prev.filter((appt) => appt.id !== id));
        toast.success("Randevu uğurla silindi");
      })
      .catch(() => toast.error("Randevunu silmək mümkün olmadı"));
  };

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
        <h1>
          Xoş gəldiniz, {user.name} {user.surname}
        </h1>

        <div className="stats">
          <div className="stat-box">
            <p className="stat-count">{appointments.length}</p>
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
                  <td>{appt.doctorName}</td>
                  <td>{appt.day}</td>
                  <td>{appt.time}</td>
                  <td>
                    <span className="status-badge">Planlaşdırılıb</span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(appt.id)}
                      style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        color: "red",
                        fontSize: "18px",
                      }}
                      title="Randevunu sil"
                      aria-label="Randevunu sil"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Account;
