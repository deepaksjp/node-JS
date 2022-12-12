const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log(req.cookies)
    res.cookie('name', 'Programming language', {expire:1000});
    res.send('this is cookies ex');
    });
    

    app.get('/clear', (req, res) => {
        res.clearCookie('name');
        console.log(req.cookies)
        res.send('cookies deleted')
    })

    app.listen(4300)