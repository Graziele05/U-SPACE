import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterMesa.css';

const RegisterMesa = () => {
    const [numero, setNumero] = useState('');
    const [capacidade, setCapacidade] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [disponibilidade, setDisponibilidade] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const mesa = {
            numero,
            capacidade,
            localizacao,
            disponibilidade
        };

        try {
            const response = await fetch('http://localhost:3000/mesas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mesa),
            });

            if (response.ok) {
                navigate('/admin/dashboard');
            } else {
                alert('Erro ao cadastrar mesa.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar mesa:', error);
            alert('Erro ao cadastrar mesa.');
        }
    };

    return (
        <div className="cadastro-mesa-container">
            <form className="cadastro-mesa-form" onSubmit={handleSubmit}>
                <h1>Cadastrar Mesa</h1>
                <input
                    type="text"
                    placeholder="Número"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Capacidade"
                    value={capacidade}
                    onChange={(e) => setCapacidade(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Localização"
                    value={localizacao}
                    onChange={(e) => setLocalizacao(e.target.value)}
                />
                <label>
                    Disponibilidade
                    <input
                        type="checkbox"
                        checked={disponibilidade}
                        onChange={(e) => setDisponibilidade(e.target.checked)}
                    />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default RegisterMesa;
