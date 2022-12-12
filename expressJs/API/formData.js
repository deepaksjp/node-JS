const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());  // or  app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


const fileName = __dirname + '/demo.html';
app.get('/', (req, res) => {
    res.sendFile(fileName);
})

app.post('/getForm', (req, res) => {
    console.log(req.body.name + 'hi')
    res.send(`user name = ${req.body.name} <br> user Email id = ${req.body.email}`)
})
app.listen(4200)