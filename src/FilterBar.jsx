import React from "react";
import { useNavigate } from "react-router-dom";
import "./FilterBar.css";

const FilterBar = ({ departments, selectedDepartment }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const selected = e.target.value;
    if (selected === "Hamısı") {
      navigate("/hospital/doctors");
    } else {
      navigate(`/hospital/doctors?department=${encodeURIComponent(selected)}`);
    }
  };

  return (
    <div className="filter-bar">
      <label htmlFor="departmentSelect">Şöbə seçin: </label>
      <select
        id="departmentSelect"
        value={selectedDepartment}
        onChange={handleChange}
      >
        <option value="Hamısı">Hamısı</option>
        {departments.map((dept) => (
          <option key={dept.id} value={dept.title}>
            {dept.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
