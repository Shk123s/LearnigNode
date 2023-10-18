var http = require('http')
var fs = require('fs');

http.createServer(function (req,res){
    // const text = fs.readFileSync('./content/big.txt','utf-8');
    // res.end(text);
    const filestystem = fs.createReadStream('./content/big.txt','utf-8');
    filestystem.on('open',()=>{
        filestystem.pipe(res);
    })
    filestystem.on('error',(err)=>{
        res.end(err)
    })
})
.listen(5000);