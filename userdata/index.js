// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req,res) =>{
//     if(req.url=== "/"){
//         fs.readFileSync(`${__dirname}/UserApi/userpi.json`,"utf-8",(err,data) =>{
//             console.log(data);
            

//         });
//         res.end("hello from the user api");
//     }else{
//         res.writeHead(404,{"Content-type": "application/json"});
//         res.end("<h1> 404 erroe pages.page doesnt exist</h1>");
//     }
// });

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to the port no 8000");
// });


const http = require('http');
const data = require('./data');

http.createServer( (req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(8000);
 