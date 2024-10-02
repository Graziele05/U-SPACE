import { getUserById } from '../controllers'; 

describe('Testando a função getUserById', () => {
    test('deve retornar um objeto de usuário com as propriedades corretas', async () => {
        const user = await getUserById(1);   
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('email');
        expect(user.email).toHaveLength(15); 
    });

    test('o campo email não deve ser nulo ou indefinido', async () => {
        const user = await getUserById(1);
        
        expect(user.email).not.toBeNull();
        expect(user.email).not.toBeUndefined();
    });

    test('o email deve estar em um formato válido', async () => {
        const user = await getUserById(1);
        const emailRegex = /^[^\s]+[^\s]+\.[^\s]+$/; 
        expect(user.email).toMatch(emailRegex);
    });
});
