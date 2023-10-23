const express = require("express");
const app = express();
const people = require('./router/people');
const auth = require('./router/auth');
app.use(express.static("./method-public"));
app.use('/api/people',people);
app.use('/login',auth)
//optional

app.listen(5000, () => {
  console.log("This port is listening:5000");
});
