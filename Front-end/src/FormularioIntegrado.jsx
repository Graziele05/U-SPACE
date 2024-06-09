import React, { useState } from 'react';
import './form.css';
import Topo from "./Topo";
import Rodape from "./Rodape";


const FormularioIntegrado = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
  });

  const [mesa, setMesa] = useState({
    numero: '',
    capacidade: '',
    localizacao: '',
    disponibilidade: '',
  });

  const [reserva, setReserva] = useState({
    clienteId: '',
    mesaId: '',
    data: '',
    hora: '',
  });

  const handleClienteChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const handleMesaChange = (e) => {
    const { name, value } = e.target;
    setMesa((prevMesa) => ({
      ...prevMesa,
      [name]: value,
    }));
  };

  const handleReservaChange = (e) => {
    const { name, value } = e.target;
    setReserva((prevReserva) => ({
      ...prevReserva,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Certifique-se de que o servidor está rodando e a URL está correta
      const clienteResponse = await fetch('http://localhost:3000/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cliente),
      });

      if (clienteResponse.ok) {
        const clienteData = await clienteResponse.json();
        console.log('Cliente adicionado com sucesso:', clienteData);
      } else {
        console.error('Erro ao adicionar cliente');
      }

      const mesaResponse = await fetch('http://localhost:3000/mesas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mesa),
      });

      if (mesaResponse.ok) {
        const mesaData = await mesaResponse.json();
        console.log('Mesa adicionada com sucesso:', mesaData);
      } else {
        console.error('Erro ao adicionar mesa');
      }

      const reservaResponse = await fetch('http://localhost:3000/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reserva),
      });

      if (reservaResponse.ok) {
        const reservaData = await reservaResponse.json();
        console.log('Reserva adicionada com sucesso:', reservaData);
      } else {
        console.error('Erro ao adicionar reserva');
      }

      setCliente({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
      });

      setMesa({
        numero: '',
        capacidade: '',
        localizacao: '',
        disponibilidade: '',
      });

      setReserva({
        clienteId: '',
        mesaId: '',
        data: '',
        hora: '',
      });
    } catch (error) {
      console.error('Erro no formulário:', error);
    }
  };

  return (
    <div>
    <Topo/>
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Cliente</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={cliente.nome}
          onChange={handleClienteChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={cliente.email}
          onChange={handleClienteChange}
          required
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="tel"
          name="telefone"
          value={cliente.telefone}
          onChange={handleClienteChange}
          required
        />
      </div>
      <div>
        <label>Endereço:</label>
        <input
          type="text"
          name="endereco"
          value={cliente.endereco}
          onChange={handleClienteChange}
          required
        />
      </div>
      <h2>Adicionar Mesa</h2>
      <div>
        <label>Número:</label>
        <input
          type="text"
          name="numero"
          value={mesa.numero}
          onChange={handleMesaChange}
          required
        />
      </div>
      <div>
        <label>Capacidade:</label>
        <input
          type="number"
          name="capacidade"
          value={mesa.capacidade}
          onChange={handleMesaChange}
          required
        />
      </div>
      <div>
        <label>Localização:</label>
        <input
          type="text"
          name="localizacao"
          value={mesa.localizacao}
          onChange={handleMesaChange}
          required
        />
      </div>
      <div>
        <label>Disponibilidade:</label>
        <input
          type="text"
          name="disponibilidade"
          value={mesa.disponibilidade}
          onChange={handleMesaChange}
          required
        />
      </div>
      <h2>Adicionar Reserva</h2>
      <div>
        <label>ID do Cliente:</label>
        <input
          type="text"
          name="clienteId"
          value={reserva.clienteId}
          onChange={handleReservaChange}
          required
        />
      </div>
      <div>
        <label>ID da Mesa:</label>
        <input
          type="text"
          name="mesaId"
          value={reserva.mesaId}
          onChange={handleReservaChange}
          required
        />
      </div>
      <div>
        <label>Data:</label>
        <input
          type="date"
          name="data"
          value={reserva.data}
          onChange={handleReservaChange}
          required
        />
      </div>
      <div>
        <label>Hora:</label>
        <input
          type="time"
          name="hora"
          value={reserva.hora}
          onChange={handleReservaChange}
          required
        />
      </div>
      <button type="submit">Reservar</button>
    </form>
    <Rodape/>
    </div>
  );
};

export default FormularioIntegrado;
