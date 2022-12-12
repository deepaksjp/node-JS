const express = require('express');
const app = express();
const std = require('./RouteEx/stdRoute'); //for routing folder Router file stdRoute.js
const teacher = require('./RouteEx/tchrRoute');  //for routing folder Router file tchrRoute.js

// for load router
app.use('/std',std);
app.use('/tchr', teacher);

// simple routing

app.get('/', (req, res) =>{
    res.send('home page')
});


app.get('/about', (req, res) =>{
    res.send('about page')
});



//string pattern 

// method for missing charector

app.get('/ab?cd', (req, res) =>{
    res.send('method for missing charector')
});
//or 
app.get('/ab?c?d', (req, res) =>{
    res.send('method for missing charector')
});

// for regular expresion
app.get(/ee/, (req, res) =>{
    res.send('method for missing charector')
});

// second callback 

app.get('/middleware', (req, res, next) =>{
    console.log(`we cann't use res.send only write our logic`)
    next();
},(req, res) =>{
    console.log('second callback');
    res.send('second callback');
});

// Array of callback
const cb1 = (req, res, next) =>{
    console.log('callback first');
    next();
}

const cb2 = (req, res, next) =>{
    console.log('callback second');
    next();
}
const cb3 = (req, res, next) =>{
    console.log('callback third');
    next();
}

app.get('/cbArray', [cb1, cb2, cb3], (req, res) =>{
    res.send('new callback')
})
//for wrong path or error massege
app.get('*', (req, res) =>{
    res.send('page not found')
});

//chained route callback
//same address for multiple methods
//not work

// app.route('/std');
// .get( (req, res) =>{
//     res.send('method for missing charector')
// });

// post((req, res) =>{
//     res.send('chained route for post methode')
// })

// put((req, res) =>{
//     res.send('chained route for put methode')
// })

// delete((req, res) =>{
//     res.send('chained route for delete methode')
// })

app.listen(3900)