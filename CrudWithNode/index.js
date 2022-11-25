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
            conteudo: req.body.conteudo,
            autor: req.body.autor,
            isbn: req.body.isbn
        }).then(() => {
            res.redirect('/');
        }).catch(error => {
            res.send('Error:' + error)
        });
    });

    app.get('/deletar/:id', (req, res) => {
        Post.destroy({where: {'id': req.params.id}}).then(() => {
          res.redirect('/');
        }).catch(error => {
            res.send('Error:' +error);
        });
    });

    app.get('/edit/:id', function(req, res){
        Post.findByPk(req.params.id)
          .then(post => {
            res.render('form-edit', {
              id: req.params.id,
              titulo: post.titulo,
              conteudo: post.conteudo,
              autor: post.autor,
              isbn: post.isbn
            })
          })
          .catch(err => {
            res.send('Post não encontrado!')
          })
      })
      app.post('/editado/:id', function(req, res){
        Post.update({
          titulo: req.body.titulo,
          conteudo: req.body.conteudo,
          autor: req.body.autor,
          isbn: req.body.isbn
        },
        {
          where: { id: req.params.id }
        }).then(function(){
          res.redirect('/')
        }).catch(function(err){
          console.log(err);
        })
      });


    app.listen(8081, () => {
        console.log('Servidor rodando da URL: http://localhost:8081');
    });

