import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userByEmail = users.find((user) => user.email === email);

    if (!userByEmail) {
      toast.error(
        "Belə bir istifadəçi tapılmadı. Zəhmət olmasa qeydiyyatdan keçin."
      );
      return;
    }
    if (userByEmail.password !== password) {
      toast.error("Şifrə yanlışdır. Zəhmət olmasa düzgün şifrə daxil edin.");
      return;
    } else {
      toast.success("Uğurla daxil oldunuz!");
    }
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("currentUser", JSON.stringify(userByEmail));

    navigate("/hospital/account");
  };

  return (
    <div className="auth-container">
      <h2>Giriş</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Daxil ol</button>
        <Link to="/hospital/register">Qeydiyyatdan keç</Link>
      </form>
    </div>
  );
};

export default Login;
