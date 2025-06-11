import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/loginModal.css'; 


type Props = {
    isOpen: boolean;
    onClose: () => void;
    onSwitchToRegister: () => void; 
  };


export const LoginModal: React.FC<Props> = ({ isOpen, onClose, onSwitchToRegister }) => {
    if (!isOpen) return null;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:3001/login', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' } ,
                body: JSON.stringify({ username, password })

             }) 
            const data = await response.json();

            if (response.ok) {
                if (data.role === 'user') {
                    navigate('/dashboard');  
                } else {
                    navigate('/admin');
                }
                onClose(); 
            } else { 
                setMessage(data.message)
            }
        } catch (error) {
            setMessage('ошибка подключения к серверу')
        }    
    }
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Вход</h2>
            <form onSubmit={handleLogin} className="auth-form">
                <input type="text" placeholder="Login" value={username} onChange={(e) => setUsername(e.target.value)} className="auth-login" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="auth-password" />
                <button type="submit" className="auth-btn">Войти</button>
                <p>{message}</p>
            </form>
            <button className="close-button" onClick={onClose}>×</button>
            <p>
              Нет аккаунта?{" "}
                       <button
            className="switch-btn"
            onClick={onSwitchToRegister}
                >
                Зарегистрироваться
              </button>
            </p>
            </div>
        </div>
    )
};