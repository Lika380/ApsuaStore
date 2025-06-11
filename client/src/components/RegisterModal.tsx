import React, { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
};

export const RegisterModal: React.FC<Props> = ({ isOpen, onClose, onSwitchToLogin }) => {
  if (!isOpen) return null;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage("Регистрация успешна!");
        setUsername("");
        setPassword("");
        onClose();
      } else {
        setMessage(data.message || "Ошибка регистрации");
      }
    } catch {
      setMessage("Ошибка подключения к серверу");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Регистрация</h2>
        <form onSubmit={handleRegister} className="auth-form">
          <input
            type="text"
            placeholder="Логин"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="auth-login"
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-password"
            required
          />
          <button type="submit" className="auth-btn">
            Зарегистрироваться
          </button>
          <p>{message}</p>
        </form>
        <p>
          Уже есть аккаунт?{" "}
          <button className="switch-btn" onClick={onSwitchToLogin}>
            Войти
          </button>
        </p>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};
