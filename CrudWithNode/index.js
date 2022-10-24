const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');


// Config
    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // BodyParser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
// Rotas
/*

    app.get('/', (req, res) => {
        Post.findAll({order: [['id', 'DESC']]}).then( posts => {
            res.render('home', {posts: posts});
        });
    });

    app.get('/cad', (req, res) => {
        res.render('formulario');
    });

    app.post('/add', (req, res) => {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(() => {
            res.redirect('/');
        }).catch(error => {
            res.send('Error:' + error)
        });
    });

    app.get('/deletar/:id', (req, res) => {
        Post.destroy({where: {'id': req.params.id}}).then(() => {
            res.send('Post deletado.');
        }).catch(error => {
            res.send('Error:' +error);
        });
    });


*/

app.get('/calc/:n1/:n2/:res', (req, res) => {
    switch (res) {
        case 1:
            res.send(req.params.n1 + req.params.n2);
            break;
        case 2:
            res.send(req.params.n1 - req.params.n2);
            break;
        case 3:
            res.send(req.params.n1 * req.params.n2);
            break;
        case 4:
            res.send(req.params.n1 / req.params.n2);
            break;
    
        default:
            res.send('Insira um valor válido.');
            break;
    }
});
app.listen(8081, () => {
    console.log('Servidor rodando da URL: http://localhost:8081');
});



// npm install body-parser
// npm install express-handlebars