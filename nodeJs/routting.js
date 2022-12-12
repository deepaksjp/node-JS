const http = require('http');
const url = require('url');
const fs = require('fs');

// http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.write('this is homepage');
//         res.end();
//     }

//     else if(req.url=='/about'){
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.write('this is about page');
//         res.end();
//     }
//     else if(req.url=='/contect'){
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.write('this is constect page');
//         res.end();
//     }
//     else{
//         const q = url.parse(req.url, true);
//         const fileName = q.pathname;

//         res.writeHead(404, {'Content-Type':'text/html'});
//         res.write(`${fileName} not found`);
//         res.end(() =>{
//             console.log(fileName)
//         });
//     }
// }).listen(3700)

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const fileName = __dirname+q.pathname;
    fs.readFile(fileName, 'UTF-8', (err, data) => {
        if(err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end(q.pathname+' '+'not found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end(console.log(q+ ' '+ fileName));
    });
}).listen(3700)


