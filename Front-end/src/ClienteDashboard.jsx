import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StyleCliente.css';
import Rodape from './Rodape';
import Topo from './Topo';
const ClienteDashboard = () => {
    const navigate = useNavigate();

    const handleFazerReserva = () => {
        navigate('/Cliente/Reservac');
    };

    const handleVerCardapio = () => {
        navigate('/Cliente/Cardapio');
    };

    return (
        <div>
            <Topo/>
        <div className="cliente-dashboard-container">
            <div className="logo-container">
                <img src="/Front-end/public/log1.png" alt="Logo" className="logo" />
                <h1>Bem-vindo!</h1>
            </div>
            <div className="buttons-container">
                <button className="dashboard-button" onClick={handleFazerReserva}>
                    <i className="fas fa-calendar-check"></i>
                    Fazer Reserva
                </button>
                <button className="dashboard-button" onClick={handleVerCardapio}>
                    <i className="fas fa-book-open"></i>
                    Ver Cardápio
                </button>
            </div>
        </div>
        <Rodape/>
        </div>
    );
};

export default ClienteDashboard;
