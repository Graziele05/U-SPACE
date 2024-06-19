import React from 'react'
import { useNavigate } from 'react-router-dom';
import './StyleAdmin.css';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleRegisterMesa = () => {
        navigate('/Admin/RegisterMesa');
    };

    const handleAdicionarCardapio = () => {
        navigate('/admin/AddCardapio');
    };

    const handleFazerReserva = () => {
        navigate('/admin/Reserva');
    };

    const handleeditarMesa = () => {
        navigate('/admin/EditMesa');
    };


const handleviewreserva = () => {
    navigate(`/admin/Select`);

    };

    return (
        <div className="admin-dashboard-container">
            <div className="logo-container">
                <img src="/Front-end/public/log1.png" alt="Logo" className="logo" />
                <h1>Bem-vindo, Admin</h1>
            </div>
            <div className="buttons-container">
                <button className="dashboard-button" onClick={handleRegisterMesa}>
                    <i className="fas fa-table"></i>
                    Cadastrar Mesa
                </button>
                <button className="dashboard-button" onClick={handleAdicionarCardapio}>
                    <i className="fas fa-utensils"></i>
                    Adicionar Cardápio
                </button>
                <button className="dashboard-button" onClick={handleFazerReserva}>
                    <i className="fas fa-calendar-check"></i>
                    Fazer Reserva
                </button>

                <button className="dashboard-button" onClick={handleeditarMesa}>
                    <i className="fas fa-calendar"></i>
                    Editar Mesa
                </button>
                <button className="dashboard-button" onClick={handleviewreserva}>
                    <i className="fas fa-calendar"></i>
                    Excluir Reserva
                </button>
            </div>
        </div>
    );
};

export default AdminDashboard;
