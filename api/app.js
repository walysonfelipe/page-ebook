var express = require('express');
var cors = require('cors');
const sgMail = require("@sendgrid/mail");
const API_KEY = 'key sendgrid';

sgMail.setApiKey(API_KEY);
var app = express();
app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
var port = process.env.PORT || 8080;

app.get('/api/enviar-email', function(req, res) {
    var nome = req.query.nome;
    var email = req.query.email;

    const message = {
        
        to: {
            name: nome,
            email: email,
        },
        from: {
                name: '📕 EBOOK FRONT-END DO ZERO',
                email:'iuricode.newsletter@gmail.com',
            },
        subject:'Seu EBOOK está aqui, ' + nome,
        text: 'Muito obrigado faça bom proveito do nosso material',
        html: '<h3>Link para baixar o ebook</h3><a href="https://raw.githubusercontent.com/iuricode/front-end-do-zero/main/front-end%20do%20zero.pdf">Baixar ebook</a>'
    };
    sgMail
    .send(message)
    .then((response)=> console.log('Email enviado'))
    .catch((error)=> console.log(error.message));
  
    res.send("enviado");
});
// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);