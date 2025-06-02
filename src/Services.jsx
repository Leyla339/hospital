import React, { useEffect, useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import {
  FaHeartPulse,
  FaChild,
  FaXRay,
  FaEye,
  FaUserDoctor,
} from "react-icons/fa6";
import { GiBrain, GiMedicines, GiSkeleton } from "react-icons/gi";
import {
  MdOutlineLocalHospital,
  MdHearing,
  MdBloodtype,
  MdScience,
} from "react-icons/md";

const iconMap = {
  FaHeartPulse,
  FaChild,
  GiBrain,
  FaUserDoctor,
  MdOutlineLocalHospital,
  FaEye,
  FaXRay,
  GiSkeleton,
  MdHearing,
  GiMedicines,
  MdBloodtype,
  MdScience,
};

const Services = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    fetch(
      "https://68382ee12c55e01d184c4c5c.mockapi.io/api/hospital/departments"
    )
      .then((res) => res.json())
      .then((data) => setDepartments(data))
      .catch((err) => console.error("Xəta baş verdi:", err));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="services">
          <h1>Şöbələrimiz</h1>
          <h3>
            Hər bir sahə üzrə ixtisaslaşmış bölmələrimizlə xidmətinizdəyik.
          </h3>
          <div className="service-cards">
            {departments.map((dep) => {
              const Icon = iconMap[dep.icon];
              return (
                <div className="service-card" key={dep.id}>
                  {Icon && <Icon className={`service-icon ${dep.iconName}`} />}
                  <div className="service-content">
                    <h2>{dep.title}</h2>
                    <p>{dep.description}</p>
                    <Link
                      to={`/hospital/doctors?department=${encodeURIComponent(
                        dep.title
                      )}`}
                    >
                      Həkimlər
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
