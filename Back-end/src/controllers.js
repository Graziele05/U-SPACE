import db from "./db.js";

// Clientes
export const getAllClients = (req, res) => {
    const sql = "SELECT * FROM clientes";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
};

export const createClient = (req, res) => {
    const { nome, email, telefone, endereco } = req.body;
    const sql = "INSERT INTO clientes (nome, email, telefone, endereco) VALUES (?, ?, ?, ?)";
    db.query(sql, [nome, email, telefone, endereco], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ id: result.insertId });
    });
};

export const updateClient = (req, res) => {
    const { nome, email, telefone, endereco } = req.body;
    const sql = "UPDATE clientes SET nome = ?, email = ?, telefone = ?, endereco = ? WHERE cliente_id = ?";
    db.query(sql, [nome, email, telefone, endereco, req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Cliente atualizado com sucesso');
    });
};

export const deleteClient = (req, res) => {
    const sql = "DELETE FROM clientes WHERE cliente_id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Cliente excluído com sucesso');
    });
};

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
    const { cliente_id, mesa_id, data_reserva, hora_reserva, numero_pessoas, status, comentarios } = req.body;
    const sql = "INSERT INTO reservas (cliente_id, mesa_id, data_reserva, hora_reserva, numero_pessoas, status, comentarios) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [cliente_id, mesa_id, data_reserva, hora_reserva, numero_pessoas, status, comentarios], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ id: result.insertId });
    });
};

export const updateReservation = (req, res) => {
    const { cliente_id, mesa_id, data_reserva, hora_reserva, numero_pessoas, status, comentarios } = req.body;
    const sql = "UPDATE reservas SET cliente_id = ?, mesa_id = ?, data_reserva = ?, hora_reserva = ?, numero_pessoas = ?, status = ?, comentarios = ? WHERE reserva_id = ?";
    db.query(sql, [cliente_id, mesa_id, data_reserva, hora_reserva, numero_pessoas, status, comentarios, req.params.id], (err, result) => {
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
