const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'cinema2'
});

// Conectar ao banco de dados
connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão ao banco de dados MySQL estabelecida');
});

app.post('/api/filme', (req, res) => {
    const { nome_Filme, diretor, sinopse, faixa_Etaria, tempo_Filme, genero } = req.body;

    const newFilme = {
        nome_Filme,
        diretor,
        sinopse,
        faixa_Etaria,
        tempo_Filme,
        genero
    };

    connection.query('INSERT INTO filme SET ?', newFilme, (err, result) => {
        if (err) {
            console.error('Erro ao adicionar o novo filme:', err);
            res.status(500).send('Erro ao adicionar novo filme no banco de dados');
            return;
        }
        res.status(200).send('Novo filme adicionado com sucesso');
    });
});

// Porta onde o servidor irá escutar
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
