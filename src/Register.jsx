import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, SetSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { name, surname, email, password };
    const users = JSON.parse(localStorage.getItem("users")) || []; // obyekt/massive ceviri
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users)); // json-a cevirir
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    toast.success("Uğurla qeydiyyatdan keçdiniz!");
    navigate("/hospital/account");
  };

  return (
    <div className="auth-container">
      <h2>Qeydiyyat</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Adınız"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Soyadınız"
          value={surname}
          onChange={(e) => SetSurname(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-poçt"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifrə"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Qeydiyyatdan keç</button>
      </form>
      <Link to="/hospital/log-in">Kabinet artıq var</Link>
    </div>
  );
};

export default Register;
