import db from "./db.js";

// Mesas
export const getAllTables = (req, res) => {
    const sql = "SELECT * FROM mesas";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
};

export const createTable = (req, res) => {
    const { numero, capacidade, localizacao, disponibilidade } = req.body;
    const sql = "INSERT INTO mesas (numero, capacidade, localizacao, disponibilidade) VALUES (?, ?, ?, ?)";
    db.query(sql, [numero, capacidade, localizacao, disponibilidade], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ id: result.insertId });
    });
};

export const updateTable = (req, res) => {
    const { numero, capacidade, localizacao, disponibilidade } = req.body;
    const sql = "UPDATE mesas SET numero = ?, capacidade = ?, localizacao = ?, disponibilidade = ? WHERE mesa_id = ?";
    db.query(sql, [numero, capacidade, localizacao, disponibilidade, req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Mesa atualizada com sucesso');
    });
};

export const deleteTable = (req, res) => {
    const sql = "DELETE FROM mesas WHERE mesa_id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Mesa excluída com sucesso');
    });
};

// Reservas
export const getAllReservations = (req, res) => {
    const sql = "SELECT * FROM reservas";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
};

export const createReservation = (req, res) => {
    const { nomecliente, datanascimento, cpf, telefone, mesa_id, data_reserva, hora_reserva, numero_pessoas, status, comentarios } = req.body;
    const sql = "INSERT INTO reservas (nomeCliente, datanascimento, cpf, telefone, mesa_id, data_reserva, hora_reserva, numero_pessoas, status, comentarios) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [nomeCliente, datanascimento, cpf, telefone, mesa_id, data_reserva, hora_reserva, numero_pessoas, status, comentarios], (err, result) => {
        if (err) {
            console.error('Erro ao criar reserva:', err);
            return res.status(500).send(err);
        }
        res.status(201).send({ id: result.insertId });
    });
};





export const updateReservation = (req, res) => {
    const { nomeCliente, datanascimento, cpf, telefone, mesa_id, data_reserva, hora_reserva, numero_pessoas, status, comentarios } = req.body;
    const sql = "UPDATE reservas SET nomecliente = ?, datanascimento = ?, cpf = ?, telefone = ?, mesa_id = ?, data_reserva = ?, hora_reserva = ?, numero_pessoas = ?, status = ?, comentarios = ? WHERE reserva_id = ?";
    db.query(sql, [nomeCliente, datanascimento, cpf, telefone, mesa_id, data_reserva, hora_reserva, numero_pessoas, status, comentarios, req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Reserva atualizada com sucesso');
    });
};

export const deleteReservation = (req, res) => {
    const sql = "DELETE FROM reservas WHERE reserva_id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Reserva excluída com sucesso');
    });
};
