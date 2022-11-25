const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    },
    autor: {
        type: db.Sequelize.TEXT
    },
    isbn: {
        type: db.Sequelize.BIGINT
    }
});

//Post.sync({force: true});

module.exports = Post
