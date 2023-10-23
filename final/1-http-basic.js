console.log("Express Tutorial");
const http = require('http');
const {readFileSync} = require('fs');
const homepage = readFileSync('./index.html');

const server = http.createServer((req,res)=>{
   if(req.url === "/")
   {
    res.writeHead(200,{'content-type':'text/html'});
    res.write(homepage);
    res.end();
   }
   else if(req.url === "/about")
   {
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>about page </h1>');
    res.end();
   }
   else
   {
    res.writeHead(400,{'content-type':'text/html'});
    res.write('<h1> page not found </h1>');
    res.end();
   }
})
server.listen(5000)