import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditMesa.css';

const EditMesa = () => {
    const { id } = useParams();
    const [mesas, setMesas] = useState([]);
    const [selectedMesa, setSelectedMesa] = useState('');
    const [numero, setNumero] = useState('');
    const [capacidade, setCapacidade] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [disponibilidade, setDisponibilidade] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMesas = async () => {
            const response = await fetch('http://localhost:3000/mesas');
            if (response.ok) {
                const data = await response.json();
                setMesas(data);
                if (id) {
                    const selected = data.find(mesa => mesa.mesa_id === parseInt(id));
                    if (selected) {
                        setSelectedMesa(selected.mesa_id.toString());
                        setNumero(selected.numero);
                        setCapacidade(selected.capacidade);
                        setLocalizacao(selected.localizacao);
                        setDisponibilidade(selected.disponibilidade);
                    }
                }
            }
        };
        fetchMesas();
    }, [id]);

    const handleMesaChange = (event) => {
        setSelectedMesa(event.target.value);
        const selected = mesas.find(mesa => mesa.mesa_id === parseInt(event.target.value));
        if (selected) {
            setNumero(selected.numero);
            setCapacidade(selected.capacidade);
            setLocalizacao(selected.localizacao);
            setDisponibilidade(selected.disponibilidade);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const mesaAtualizada = {
            mesa_id: parseInt(selectedMesa),
            numero,
            capacidade,
            localizacao,
            disponibilidade
        };

        try {
            const response = await fetch(`http://localhost:3000/mesas/${selectedMesa}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mesaAtualizada),
            });

            if (response.ok) {
                alert('Mesa atualizada com sucesso!');
            } else {
                alert('Erro ao atualizar mesa.');
            }
        } catch (error) {
            console.error('Erro ao atualizar mesa:', error);
            alert('Erro ao atualizar mesa.');
        }
    };

    return (
        <div className="edit-mesa-container">
            <h1>Editar Mesa</h1>
            <label>Selecione a mesa:</label>
            <select value={selectedMesa} onChange={handleMesaChange}>
                <option value="">Selecione uma mesa</option>
                {mesas.map(mesa => (
                    <option key={mesa.mesa_id} value={mesa.mesa_id}>{mesa.numero}</option>
                ))}
            </select>
            {selectedMesa && (
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Atualizar Mesa</button>
                </form>
            )}
        </div>
    );
};

export default EditMesa;
