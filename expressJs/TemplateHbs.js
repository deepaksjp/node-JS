const express = require('express');
const app = express();
const path = require('path')
// const staticpath = require('./views/TemplateHbs.hbs')
staticpath = path.join(__dirname, '/views')

app.set('view engine', 'hbs');
app.use(express.static(staticpath));

app.get('/', (err, res) =>{
    res.render('TemplateHbs', {
        cName:'gray',
        name:'rohit'
    })
}); 

app.listen(4000, () => {
    console.log('this is template engine ex')
});