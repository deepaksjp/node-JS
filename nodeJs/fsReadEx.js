const http = require('http');
const fs = require('fs');

// const fileName = __dirname+'/demo.text'   //  text file
const fileName = __dirname+'/demo.html'  //html file

http.createServer((req, res)=>{
    fs.readFile(fileName, (err,data)=>{
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3500, () => {
    console.log('server is working')
})


// Stream

// http.createServer((req, res)=>{
//     const rdData = fs.createReadStream(fileName);
//     rdData.on('data', (chunkdata)=>{
//         res.write(chunkdata);
//     });

//     rdData.on('end', ()=>{
//         res.end();
//     });

//     rdData.on('error', err=>{
//         console.log('err');
//         res.end('file not found')
//     })

//     rdData.pipe(res);
// }).listen(3500)
