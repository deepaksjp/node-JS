const EventEmitter = require('events');
const event = new EventEmitter();

event.on('hello', (sc, res)=>{
    console.log(`this is first example of events function & status code is ${sc} and ${res}.`)
})

event.on('hello', (sc, res)=>{
    console.log(`this is first example of events function & status code is ${sc} and ${res}.`)
})

event.emit('hello',200, 'ok')