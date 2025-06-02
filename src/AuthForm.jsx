import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { name, surname, email, password };
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      toast.error("Bu email ilə artıq qeydiyyatdan keçilib!");
      return;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    login(newUser);
    toast.success("Uğurla qeydiyyatdan keçdiniz!");

    setName("");
    setSurname("");
    setEmail("");
    setPassword("");

    navigate("/hospital/account");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      login(user);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("currentUser", JSON.stringify(user));
      toast.success("Daxil oldunuz!");

      setEmail("");
      setPassword("");

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
            <button
              type="button"
              className="switch"
              onClick={() => setIsLogin(true)}
            >
              Artıq hesabınız var?
            </button>
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
            <button
              type="button"
              className="switch"
              onClick={() => setIsLogin(false)}
            >
              Hesabınız yoxdur?
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
