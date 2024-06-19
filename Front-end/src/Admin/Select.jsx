import React, { useState, useEffect } from 'react';
import './Select.css';

const SelectReserva = () => {
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        const fetchReservas = async () => {
            try {
                const response = await fetch('http://localhost:3000/reservas');
                if (response.ok) {
                    const data = await response.json();
                    setReservas(data);
                } else {
                    console.error('Erro ao carregar reservas:', response.status);
                }
            } catch (error) {
                console.error('Erro ao carregar reservas:', error);
            }
        };
        fetchReservas();
    }, []);

    const handleExcluirReserva = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/reservas/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                alert('Reserva excluída com sucesso!');
                setReservas(reservas.filter(reserva => reserva.reserva_id !== id));
            } else {
                console.error('Erro ao excluir reserva:', response.status);
            }
        } catch (error) {
            console.error('Erro ao excluir reserva:', error);
        }
    };

    return (
        <div className="view-reserva-container">
            <h1>Reservas</h1>
            <ul>
                {reservas.map(reserva => (
                    <li key={reserva.reserva_id}>
                        <p><strong>ID:</strong> {reserva.reserva_id}</p>
                        <p><strong>Nome do Cliente:</strong> {reserva.nomecliente}</p>
                        <p><strong>Data da Reserva:</strong> {reserva.data_reserva}</p>
                        <button onClick={() => handleExcluirReserva(reserva.reserva_id)}>Excluir Reserva</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectReserva;
