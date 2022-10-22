const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// A way to create tables for your db with Sequelize
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

/*

After create the table (before execute) you need to write a command like this one

    TableName.sync({force: true});

*/

/*

A way to insert data into the tables with Sequelize

Postagem.create({
    titulo: 'Um exemplo de Post',
    conteudo: 'var ipsum defi abumv apritm amvun apsoe'
});

Usuario.create({
    nome: 'Felipe Floriano de Fontes',
    idade: 19,
    email: 'Felipe@gmail.com'
});

*/

/*

Testing connection:


sequelize.authenticate().then(function(){
    console.log('Connection has been established successfully.');
}).catch(function(error){
    console.log('Unable to connect to the database:', error);
});

*/