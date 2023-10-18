const {createReadStream} = require('fs');
const { result } = require('lodash');
// const stream = createReadStream('./content/big.txt','utf-8');
const stream = createReadStream('./content/big.txt',);

stream.on('data',(result)=>{
    console.log(result)
});