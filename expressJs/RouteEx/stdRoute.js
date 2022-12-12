const express =require("express");
const Router = express.Router();

Router.get('/get',(req, res) =>{
    res.send('get Router ');
});

Router.post('/get',(req,res) => {
    res.send('post router');
});

Router.put('/put',(req,res) => {
    res.send('put router');
});

Router.delete('/delete',(req,res) => {
    res.send('delete router');
});

Router.patch('/patch',(req,res) => {
    res.send('patch router');
});

module.exports = Router;