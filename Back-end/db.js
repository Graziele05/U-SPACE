import mysql from 'mysql';
const connection = mysql.createConnection({

host: 'localhost',
user: 'root',
password: 'password',
database: 'uspc'
});

connection.connect((err) => {
if(err){
    console.error('Erro ao realizar a conexão com o banco de dados: ', err);
   throw err;
}
console.log('Conexão com o banco de dados concluída');

})

export default connection;