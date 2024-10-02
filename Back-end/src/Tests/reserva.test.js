import { createReservac } from '../controllers'; 

describe('Testando a função createReservac', () => {
    test('deve criar uma nova reserva com as propriedades corretas', async () => {
        const reservation = await createReservac({
            nomecliente: 'John Doe',
            datanascimento: '1990-01-01',
            cpf: '12345678900',
            telefone: '123456789',
            mesa_id: 1,
            data_reserva: '2024-10-15',
            hora_reserva: '20:00',
            numero_pessoas: 4,
            status: 'confirmada',
            comentarios: 'Sem restrições alimentares'
        });
        
        expect(reservation).toHaveProperty('mesa_id', 1);
        expect(reservation).toHaveProperty('status', 'confirmada');
        expect(reservation.numero_pessoas).toBeLessThanOrEqual(10); 
    });

    test('teste com o intuito de falhar ao tentar criar uma reserva com mesa_id inválido', async () => {
        await expect(createReservac({
            nomecliente: 'Jane Doe',
            datanascimento: '1990-01-01',
            cpf: '12345678900',
            telefone: '123456789',
            mesa_id: 99, 
            data_reserva: '2024-10-15',
            hora_reserva: '20:00',
            numero_pessoas: 4,
            status: 'confirmada',
            comentarios: ''
        })).rejects.toThrow('ER_NO_REFERENCED_ROW_2'); 
    });
});
