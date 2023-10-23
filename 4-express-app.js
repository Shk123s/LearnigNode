const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("./public"));
//setup static and middleware
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./public/index.html"));
// });
app.all("*", (req, res) => {
  res.status(404).send("page is not found");
});
app.listen(5000, () => {
  console.log("port is listening:5000");
});
