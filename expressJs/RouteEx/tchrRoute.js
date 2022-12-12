const express = require('express');
const Router = express.Router();

Router.get('/get',(req, res) => {
    res.send('teacher get Router')
});

Router.post('/get',(req,res) => {
    res.send('teacher post router');
});

Router.put('/put',(req,res) => {
    res.send('teacher put router');
});

Router.delete('/delete',(req,res) => {
    res.send('teacher delete router');
});

Router.patch('/patch',(req,res) => {
    res.send('teacher patch router');
});

module.exports = Router;