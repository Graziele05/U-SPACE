import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SelectReserva = () => {
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        const fetchReservas = async () => {
            const response = await fetch('http://localhost:3000/reservas');
            if (response.ok) {
                const data = await response.json();
                setReservas(data);
            }
        };
        fetchReservas();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/reservas/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setReservas(reservas.filter(reserva => reserva.reserva_id !== id));
            } else {
                console.error('Erro ao excluir reserva');
            }
        } catch (error) {
            console.error('Erro ao excluir reserva:', error);
        }
    };

    return (
        <div>
            <h1>Selecionar e Excluir Reserva</h1>
            <ul>
                {reservas.map(reserva => (
                    <li key={reserva.reserva_id}>
                        <span>Reserva ID: {reserva.reserva_id}</span>
                        <span>Nome do Cliente: {reserva.nomecliente}</span>
                        <span>Data da Reserva: {reserva.data_reserva}</span>
                        <button onClick={() => handleDelete(reserva.reserva_id)}>Excluir</button>
                        <Link to={`/admin/viewreserva/${reserva.reserva_id}`}>Selecionar</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectReserva;
