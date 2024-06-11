import React from 'react'

const login = () => {
    return (
        <div>
            <form>
                <h1>Faça o login para acessar o sistema</h1>
                <input type="email" placeholder='E-mail' />
                <input type="password" placeholder='Senha' />

                <div className='recall-forget'>
                    <label>
                        <input type="checkbox" />
                        LEMBRAR DE MIM
                    </label>
                </div>
                <button>Entrar</button>
                <div className='signup-link'>
                    <a href="#">Registrar conta</a>
                </div>
            </form>
        </div>
    )
}

export default login
