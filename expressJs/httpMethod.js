const express = require('express');
const app = express();

app.get('/:id([0-9]{3})/:name', (req, res) => {
    res.send('this is id = '+ req.params.id +" "+ req.params.name);
});

//for send error massege
app.get('*', (req, res) => {
    res.send('sorry no match ');

})

app.listen(3800);