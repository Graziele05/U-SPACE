import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Select.css';

const SelectUser = () => {
    const navigate = useNavigate();

    const handleSelect = (type) => {
        if (type === 'cliente') {
            navigate('/cliente');
        } else if (type === 'admin') {
            navigate('/login-admin');
        }
    };

    return (
        <div className="select-container">
            <div className="logo-container">
                <img src="/Front-end/public/log1.png" alt="Logo" className="logo" />
                <h1>Bem-vindo</h1>
            </div>
            <div className="form-container">
                <h2>Escolha seu tipo de usuário</h2>
                <button onClick={() => handleSelect('cliente')}>Cliente</button>
                <button onClick={() => handleSelect('admin')}>Admin</button>
            </div>
        </div>
    );
};

export default SelectUser;
