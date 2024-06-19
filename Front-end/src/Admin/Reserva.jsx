import React, { useState, useEffect } from 'react';
import './Reserva.css';

const Reserva = () => {
    const [mesas, setMesas] = useState([]);
    const [nomecliente, setNomeCliente] = useState('');
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
            nomecliente: nomecliente,
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
        <div className='body'>
        <div className="reserva-container">
            <h2>Fazer Reserva</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label>Nome do Cliente:</label>
                        <input type="text" value={nomecliente} onChange={(e) => setNomeCliente(e.target.value)} required />
                    </div>
                    <div>
                        <label>Data de Nascimento:</label>
                        <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>CPF:</label>
                        <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                    </div>
                    <div>
                        <label>Telefone:</label>
                        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Mesa:</label>
                        <select value={mesaId} onChange={(e) => setMesaId(e.target.value)} required>
                            <option value="">Selecione uma mesa</option>
                            {mesas.map((mesa) => (
                                <option key={mesa.mesa_id} value={mesa.mesa_id}>
                                    {mesa.numero} - {mesa.localizacao}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Data da Reserva:</label>
                        <input type="date" value={dataReserva} onChange={(e) => setDataReserva(e.target.value)} required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Hora da Reserva:</label>
                        <input type="time" value={horaReserva} onChange={(e) => setHoraReserva(e.target.value)} required />
                    </div>
                    <div>
                        <label>Número de Pessoas:</label>
                        <input type="number" value={numeroPessoas} onChange={(e) => setNumeroPessoas(e.target.value)} required min="1" />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Status:</label>
                        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
                    </div>
                </div>
                <div className="form-row">
                    <div>
                        <label>Comentários:</label>
                        <textarea value={comentarios} onChange={(e) => setComentarios(e.target.value)} />
                    </div>
                </div>
                <button type="submit">Criar Reserva</button>
            </form>
        </div>
        </div>
    );
};

export default Reserva;
