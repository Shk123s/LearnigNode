const EventEmitter = require('events');
const customEmitter = new EventEmitter;
customEmitter.on('response',(name,id)=>{
    console.log(`data received ${name} with id ${id}`);
});
customEmitter.on('response',()=>{
    console.log(" other data received");
});
customEmitter.emit('response','john','34');