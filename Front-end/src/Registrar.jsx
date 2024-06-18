import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('cliente');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, role }),
        });

        if (response.ok) {
            alert('Registro bem-sucedido!');
            navigate('/login');
        } else {
            alert('Erro no registro. Tente novamente.');
        }
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h1>Registrar nova conta</h1>
                <input
                    type="text"
                    placeholder="Nome de usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className="role-selection">
                    <label>
                        <input
                            type="radio"
                            value="cliente"
                            checked={role === 'cliente'}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        Cliente
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="admin"
                            checked={role === 'admin'}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        Admin
                    </label>
                </div>
                <button type="submit">Registrar</button>
                <div className="login-link">
                    <a href="/login">Já tem uma conta? Faça login</a>
                </div>
            </form>
        </div>
    );
};

export default Register;
