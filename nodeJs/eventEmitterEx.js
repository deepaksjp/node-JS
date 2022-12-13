const express = require('express');
const app = express();

const EventEmitter = require('events');
const event = new EventEmitter();

let count = 0;
event.on('countApi', (y) => {
    count++;
    console.log('API '+y+' '+count+' times.');
});

app.get('/', (req, res) => {
    res.send('get methode called');
});

app.get('/abc', (req, res) =>{
    res.send('path abc');
    event.emit('countApi', 'abc');

});

app.get('/xyz', (req, res) =>{
    res.send('path xyz');
    event.emit('countApi', 'xyz');

});

app.listen(3100);