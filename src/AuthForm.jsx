import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { toast } from "react-toastify";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { name, surname, email, password };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    toast.success("Uğurla qeydiyyatdan keçdiniz!");
    navigate("/hospital/account");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("currentUser", JSON.stringify(user));
      toast.success("Daxil oldunuz!");
      navigate("/hospital/account");
    } else {
      toast.error("Email və ya şifrə yanlışdır!");
    }
  };

  return (
    <div className="auth">
      <div className="auth-main">
        <div
          className="form-wrapper"
          style={{ height: isLogin ? "450px" : "550px" }}
        >
          <form onSubmit={handleRegister} className={isLogin ? "hidden" : ""}>
            <label>Qeydiyyat</label>
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
              onChange={(e) => setSurname(e.target.value)}
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
            <div className="switch" onClick={() => setIsLogin(true)}>
              Artıq hesabınız var?
            </div>
          </form>
          <form onSubmit={handleLogin} className={isLogin ? "" : "hidden"}>
            <label>Daxil ol</label>
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
            <div className="switch" onClick={() => setIsLogin(false)}>
              Hesabınız yoxdur?
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
