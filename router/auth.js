const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    const {fname} = req.body;
    if(fname)
    {
     return res.status(200).send(`welcome ${fname}`);
    }
     res.status(401).send('please provide crendtials')
    
   });
   module.exports = router