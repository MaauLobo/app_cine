# appcinema

## Instale as Dependencias 
```
npm install
```

### Para executar a aplicação
```
npm run serve
```

### Atualize os informações do banco de dados no arquivo server.js
```
// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'cinema2'
});
```


### Para iniciar o servidor 
```
node server.js
```


