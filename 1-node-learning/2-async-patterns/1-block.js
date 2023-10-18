const http = require('http');
const server = http.createServer((req,res)=>
{  if(req.url === "/home")
{
    res.end('hello world');
}
if(req.url === "/about")
{
    res.end('about world');
}
if(req.url === "/chalo")
{
    res.end('chalo world');
}
})
server.listen(5000,()=>{
    console.log('server listening on port: 5000....');
})