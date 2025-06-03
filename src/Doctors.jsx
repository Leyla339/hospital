import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FilterBar from "./FilterBar";
import Popup from "./Popup";
import "./Doctors.css";

const useQuery = () => new URLSearchParams(useLocation().search);

const Doctors = () => {
  const query = useQuery();
  const selectedDepartment = query.get("department") || "Hamısı";

  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    fetch("https://68382ee12c55e01d184c4c5c.mockapi.io/api/hospital/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));

    fetch(
      "https://68382ee12c55e01d184c4c5c.mockapi.io/api/hospital/departments"
    )
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);

  const filteredDoctors =
    selectedDepartment === "Hamısı"
      ? doctors
      : doctors.filter(
          (doc) =>
            doc.department.trim().toLowerCase() ===
            selectedDepartment.trim().toLowerCase()
        );

  return (
    <div className="doctors">
      <div className="container">
        <h1>Həkimlərimiz</h1>

        <FilterBar
          departments={departments}
          selectedDepartment={selectedDepartment}
        />

        {selectedDepartment === "Hamısı" ? (
          departments.map((dept) => {
            const deptDoctors = doctors.filter(
              (doc) =>
                doc.department.trim().toLowerCase() ===
                dept.title.trim().toLowerCase()
            );
            if (deptDoctors.length === 0) return null;
            return (
              <div key={dept.id}>
                <h2 className="dept-title">{dept.title}</h2>
                <div className="doctors-cards">
                  {deptDoctors.map((doc) => (
                    <div className="doctor-card" key={doc.id}>
                      <img src={doc.photoUrl} alt={doc.name} />
                      <h2>{doc.name}</h2>
                      <p>{doc.experience} il təcrübə</p>
                      <div className="doctor-buttons">
                        <button onClick={() => setSelectedDoctor(doc)}>
                          Ətraflı
                        </button>
                        <Link to="/hospital/online-request">Qəbula yazıl</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <h2 className="dept-title">{selectedDepartment}</h2>
            <div className="doctors-cards">
              {filteredDoctors.map((doc) => (
                <div className="doctor-card" key={doc.id}>
                  <img src={doc.photoUrl} alt={doc.name} />
                  <h2>{doc.name}</h2>
                  <p>{doc.experience} il təcrübə</p>
                  <div className="doctor-buttons">
                    <button onClick={() => setSelectedDoctor(doc)}>
                      Ətraflı
                    </button>
                    <Link to="/hospital/online-request">Qəbula yazıl</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedDoctor && (
          <Popup
            doctor={selectedDoctor}
            onClose={() => setSelectedDoctor(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Doctors;
