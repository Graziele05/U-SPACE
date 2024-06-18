import React, { useState, useEffect } from 'react';
import './Reserva.css';

const Reserva = () => {
    const [mesas, setMesas] = useState([]);
    const [nomeCliente, setNomeCliente] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mesaId, setMesaId] = useState('');
    const [dataReserva, setDataReserva] = useState('');
    const [horaReserva, setHoraReserva] = useState('');
    const [numeroPessoas, setNumeroPessoas] = useState(1);
    const [status, setStatus] = useState('');
    const [comentarios, setComentarios] = useState('');

    useEffect(() => {
        const fetchMesas = async () => {
            const response = await fetch('http://localhost:3000/mesas');
            if (response.ok) {
                const data = await response.json();
                setMesas(data);
            } else {
                console.error('Erro ao buscar mesas:', response.statusText);
            }
        };

        fetchMesas();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const reserva = {
            nomecliente: nomeCliente,
            datanascimento: dataNascimento,
            cpf: cpf,
            telefone: telefone,
            mesa_id: mesaId,
            data_reserva: dataReserva,
            hora_reserva: horaReserva,
            numero_pessoas: numeroPessoas,
            status: status,
            comentarios: comentarios,
        };

        const response = await fetch('http://localhost:3000/reservas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reserva),
        });

        if (response.ok) {
            alert('Reserva criada com sucesso');
            // Limpar o formulário ou redirecionar conforme necessário
        } else {
            const errorText = await response.text();
            console.error('Erro ao criar reserva:', errorText);
            alert('Erro ao criar reserva: ' + errorText);
        }
    };

    return (
        <div className="reserva-container">
            <h2>Fazer Reserva</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome do Cliente:
                    <input type="text" value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)} required />
                </label>
                <label>
                    Data de Nascimento:
                    <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                </label>
                <label>
                    CPF:
                    <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                </label>
                <label>
                    Telefone:
                    <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                </label>
                <label>
                    Mesa:
                    <select value={mesaId} onChange={(e) => setMesaId(e.target.value)} required>
                        <option value="">Selecione uma mesa</option>
                        {mesas.map((mesa) => (
                            <option key={mesa.mesa_id} value={mesa.mesa_id}>
                                {mesa.numero} - {mesa.localizacao}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Data da Reserva:
                    <input type="date" value={dataReserva} onChange={(e) => setDataReserva(e.target.value)} required />
                </label>
                <label>
                    Hora da Reserva:
                    <input type="time" value={horaReserva} onChange={(e) => setHoraReserva(e.target.value)} required />
                </label>
                <label>
                    Número de Pessoas:
                    <input type="number" value={numeroPessoas} onChange={(e) => setNumeroPessoas(e.target.value)} required min="1" />
                </label>
                <label>
                    Status:
                    <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
                </label>
                <label>
                    Comentários:
                    <textarea value={comentarios} onChange={(e) => setComentarios(e.target.value)} />
                </label>
                <button type="submit">Criar Reserva</button>
            </form>
        </div>
    );
};

export default Reserva;
