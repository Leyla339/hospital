import React from "react";
import "./Popup.css";
import { IoIosClose } from "react-icons/io";

const Popup = ({ doctor, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <IoIosClose />
        </button>

        {
          <img
            src={doctor.photoUrl}
            alt={doctor.name}
            className="popup-photo"
          />
        }

        <h2>{doctor.name}</h2>
        <p>
          <b>Şöbə:</b> {doctor.department}
        </p>
        <p>
          <b>Təcrübə:</b> {doctor.experience} il
        </p>
        <p>
          <b>Təhsil:</b> {doctor.education}
        </p>
        <p>
          <b>Əlaqə:</b>
        </p>
        <p>📞 {doctor.contacts.phone}</p>
        <p>✉️ {doctor.contacts.email}</p>
        <p>
          <b>İş günləri:</b> {doctor.workingDays.join(", ")}
        </p>
        <p>
          <b>İş saatları:</b> {doctor.workingHours}
        </p>
        <p>
          <b>Qəbul haqqı:</b> {doctor.fees}
        </p>
      </div>
    </div>
  );
};

export default Popup;
