const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const app = express();

// Configura o EJS como mecanismo de vicualização
app.set('view engine', 'ejs');

// Middleware para parsing do body
app.use(bodyParser.urlencoded({extended: false}));

// Rotas
app.get('/', userController.getAllUsers);
app.get('/add',(req,res) => res.render('add'));
app.post('/add', userController.addUser);
app.get('/edit/:id', userController.getUserById);
app.get('/delete/:id', userController.getDeleteUser);
app.post('/edit/:id', userController.updateUser);
app.post('/delete/:id', userController.deleteUser);


// Iniciar o servidor
app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});
