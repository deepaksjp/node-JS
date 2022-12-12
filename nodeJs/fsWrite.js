const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {
    
    const rdData = fs.createReadStream('demo.text');
    rdData.on('data', (chunkdata) =>{
        res.write(chunkdata);
    });

    rdData.on('end', ()=>{
        res.end();
    });
    rdData.on('error', (err) =>{
        res.end('file not found');
    });
})

server.listen(3501)