const {readFile,writeFile } = require('fs');
// const { send } = require('process');

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err)
        {
            console.log(err)
        }
    const second = result
    writeFile("./content/result-async.txt",
    `here is the result ${first} ,${second}`
    ,(err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
        console.log(result)
    });
    // console.log(result)
    })
})