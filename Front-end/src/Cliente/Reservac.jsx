import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reservac.css';

const Reservac = () => {
    const [nomecliente, setNomecliente] = useState('');
    const [datanascimento, setDatanascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mesa_id, setMesaId] = useState('');
    const [data_reserva, setDataReserva] = useState('');
    const [hora_reserva, setHoraReserva] = useState('');
    const [numero_pessoas, setNumeroPessoas] = useState('');
    const [status, setStatus] = useState('');
    const [comentarios, setComentarios] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReservac = {
            nomecliente,
            datanascimento,
            cpf,
            telefone,
            mesa_id,
            data_reserva,
            hora_reserva,
            numero_pessoas,
            status,
            comentarios,
        };
        try {
            const response = await fetch('http://localhost:3000/reservasc', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newReservac),
            });
            if (response.ok) {
                alert('Reserva criada com sucesso!');
                navigate('/reservasc');
            } else {
                console.error('Erro ao criar reserva:', response.status);
            }
        } catch (error) {
            console.error('Erro ao criar reserva:', error);
        }
    };

    return (
        <div className="cadastro-reservac-container">
            <h1>Cadastro de Reserva</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label>Nome do Cliente:
                            <input type="text" value={nomecliente} onChange={(e) => setNomecliente(e.target.value)} required />
                        </label>
                    </div>
                    <div>
                        <label>Data de Nascimento:
                            <input type="date" value={datanascimento} onChange={(e) => setDatanascimento(e.target.value)} required />
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>CPF:
                            <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                        </label>
                    </div>
                    <div>
                        <label>Telefone:
                            <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>ID da Mesa:
                            <input type="text" value={mesa_id} onChange={(e) => setMesaId(e.target.value)} required />
                        </label>
                    </div>
                    <div>
                        <label>Data da Reserva:
                            <input type="date" value={data_reserva} onChange={(e) => setDataReserva(e.target.value)} required />
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Hora da Reserva:
                            <input type="time" value={hora_reserva} onChange={(e) => setHoraReserva(e.target.value)} required />
                        </label>
                    </div>
                    <div>
                        <label>Número de Pessoas:
                            <input type="number" value={numero_pessoas} onChange={(e) => setNumeroPessoas(e.target.value)} required />
                        </label>
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Status:
                            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
                        </label>
                    </div>
                    <div>
                        <label>Comentários:
                            <textarea value={comentarios} onChange={(e) => setComentarios(e.target.value)}></textarea>
                        </label>
                    </div>
                </div>
                <button type="submit">Cadastrar Reserva</button>
            </form>
        </div>
    );
};

export default Reservac;
