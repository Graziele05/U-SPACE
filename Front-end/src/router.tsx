import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectUser from './Select';
import LoginAdmin from './LoginAdmin.jsx';
import ClienteDashboard from './ClienteDashboard';
import AdminDashboard from './AdminDashboard'; 
import RegisterMesa from './Admin/RegisterMesa'; 
import EditMesa from './Admin/EditMesa';
import Reserva from './Admin/Reserva';
import Cardapio from './Cliente/Cardapio';
import SelectReserva from './Admin/Select';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SelectUser />} />
                <Route path="/login-admin" element={<LoginAdmin />} />
                <Route path="/cliente" element={<ClienteDashboard />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/registermesa" element={<RegisterMesa />} />
                <Route path='/admin/editmesa' element={<EditMesa />}/>
                <Route path='/admin/reserva' element={<Reserva />}/>
                <Route path='/cliente/cardapio' element={<Cardapio />}/>
                <Route path='/admin/select' element={<SelectReserva />}/>
            </Routes>
        </Router>
    );
};

export default App;
