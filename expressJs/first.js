const express = require('express');
const app = express();

app.get('/', (err, res) =>{
    res.send('Hi')
})
app.listen(3800);