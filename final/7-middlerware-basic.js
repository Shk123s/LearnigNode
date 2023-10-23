const logger = require("./logger-middlerware");
const authorize = require("./authorize");
const morgan = require('morgan')
  //req => middleware => response 
// app.use([logger,authorize]);
app.use(morgan('tiny'))
app.get('/',(req,res)=>{
  res.send('home');
})
app.get('/about',(req,res)=>{
  res.send('about');
})
app.get('/api/product',(req,res)=>{
  res.send('Product');
})
app.get('/api/items',(req,res)=>{
  console.log(req.user)
  res.send('Items');
})
