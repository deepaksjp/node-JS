const express = require('express');
const app = express();

app.get('/:names', (req, res) => {
    
    res.send(`name is ${req.params.names}`)
})

app.listen(4100);