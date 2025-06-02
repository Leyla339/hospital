import React, { useEffect, useState } from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { FaChild, FaXRay, FaEye } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdOutlineLocalHospital, MdHearing } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { GiSkeleton } from "react-icons/gi";
import { MdScience } from "react-icons/md";
import Slider from "react-slick";
import "./Departments.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Departments = () => {
  const [departments, setDepartments] = useState([]);
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
  useEffect(() => {
    fetch(
      "https://68382ee12c55e01d184c4c5c.mockapi.io/api/hospital/departments"
    )
      .then((res) => res.json())
      .then((data) => setDepartments(data))
      .catch((err) => console.error("Xəta:", err));
  }, []);
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll:1 } },
    ],
  };

  return (
    <div className="departments">
      <Slider {...settings}>
        {departments.map((dept) => {
          const IconComponent = iconMap[dept.icon];
          return (
            <div key={dept.id} className="card">
              {IconComponent && <IconComponent className="card-icon" />}
              <h1>{dept.title}</h1>
              <p>{dept.description}</p>
            </div>
          );
        })}
      </Slider>
      <div className="more-btn">
        <Link to="/hospital/services" className="more-service">
          Bütün xidmətlər
        </Link>
      </div>
    </div>
  );
};

export default Departments;
