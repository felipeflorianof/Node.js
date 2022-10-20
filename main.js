const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/html/about.html");
  });

app.get('/blog', (req, res) => {
    res.send('Welcome to my blog!');
});

app.get('/ola/:nome/:cargo/:salario', (req, res) => {
    res.send('<h2>Ola ' +req.params.nome+'</h2> <p>Seu Cargo é: ' +req.params.cargo + '</p> <p>Salário: ' +req.params.salario + '</p>');
});

app.listen(8080, () =>{
    console.log('Servidor rodando da URL: http://localhost:8008');
});


// npm install express
// npm install nodemon
// npm install --save sequelize
// npm install --save mysql2
