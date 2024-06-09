import express from "express";
import cors from "cors";
import { getAllClients, createClient, updateClient, deleteClient, getAllTables, createTable, updateTable, deleteTable, getAllReservations, createReservation, updateReservation, deleteReservation } from "./controllers.js";
import db from "./db.js";

const app = express();

app.use(express.json());
app.use(cors());


app.get('/clientes', getAllClients);
app.post('/clientes', createClient);
app.put('/clientes/:id', updateClient);
app.delete('/clientes/:id', deleteClient);


app.get('/mesas', getAllTables);
app.post('/mesas', createTable);
app.put('/mesas/:id', updateTable);
app.delete('/mesas/:id', deleteTable);


app.get('/reservas', getAllReservations);
app.post('/reservas', createReservation);
app.put('/reservas/:id', updateReservation);
app.delete('/reservas/:id', deleteReservation);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});