const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hi')
});

app.get('*', (req, res) => {
    var err = new error('Something went wrong');
    next(err);
    // res.status(404).send('Something went wrong');
});

app.use((err, req, res, next)=>{
    res.status(404).send('Oops, Something went wrong.');    
});

app.listen(4300);