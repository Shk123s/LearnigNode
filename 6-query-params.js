const express = require("express");
const app = express();
const { products } = require("./data.js");
app.get("/", (req, res) => {
  res.send('<a href="api/prodocut">hello</a>');
});
app.get("/api/prodocut", (req, res) => {
  let newarray = products.map((product) => {
    const { id, price } = product;
    return { id, price };
  });
  res.json(newarray);
});
app.get("/api/prodocut/:productId", (req, res) => {
  const { productId } = req.params;
  const singlearray = products.find(
    (product) => product.id === Number(productId)
  );
  if (!singlearray) {
    return res.status(404).send("product does not exist");
  }
  return res.json(singlearray);
});
app.get('/api/prodouct/:productId/nice/:niceId',(req,res)=>
{
  console.log(req.params);
  res.send("nice")
})
app.get('/api/v1/query',(req,res)=>{
  const {search,limit} =req.query;
  let sortedProducts = [...products];
  if(search)
  {
   sortedProducts = products.filter((product)=>{
    return product.name.startsWith(search)
   });
  }
  if(limit)
  {
     return sortedProducts = sortedProducts.slice(0,Number(limit))
  }
  if(sortedProducts.length <1 )
  {
    return res.status(200).json({sucess:true,data:[]})
  }
   return res.status(200).json(sortedProducts);
})
app.listen(5000, () => {
  console.log("This port is listening:5000");
});
