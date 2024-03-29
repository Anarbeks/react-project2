import React, { useState } from "react";
import "./Register.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, isError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (email || password) {
      await register(email, password);
      navigate("/");
    } else {
      return isError(true);
    }
  };
  return (
    <div className="container">
      <div className="path">
        <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Главная
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
            fill="#414141"
          />
        </svg>
        <p style={{ cursor: "pointer" }}>Регистрация</p>
      </div>
      <div className="register__form">
        <h1>Регистрация</h1>
        {error ? <p style={{ color: "red" }}>Ошибка, заполните поля!</p> : null}
        <input
          type="email"
          placeholder="Введите логин"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          min={8}
          type="password"
          placeholder="Введите пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="register__remember">
          {" "}
          <span>Запомнить меня</span>
          <input type="checkbox" />
        </div>
        <button onClick={() => handleSubmit()}>Зарегистрироваться</button>
        <div className="register__tologin">
          {" "}
          <span>Есть аккаунт?</span>
          <a onClick={() => navigate("/login")}>Войти</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
