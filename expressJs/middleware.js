const express = require("express")
const app = express();
const Router = express.Router();
const middleware = require('./middlewareFun')

app.get('/', (req, res) =>{
    res.send('this is home page');
});
 
Router.get('/about', middleware, (req, res) => {
    res.send('this is about page')
})

Router.get('/contact', middleware, (req, res) => {
    res.send('this is contact page')
})



Router.get('*', middleware, (req, res) => {
    res.send('page not found')
})

app.use('/', Router)
app.listen(3900);