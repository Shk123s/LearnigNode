const express = require('express');
const router = express.Router();
const { getPeople,
  updatePeople,
  EditPeople,
  DeletePeople} = require('../controllers/peopleController')
// router.use(express.urlencoded({extended:false}));
// to parse the json
router.use(express.json())

router.get('/',getPeople);
router.post('/login/postman',updatePeople)

router.put('/:id',EditPeople);
router.delete('/:id',DeletePeople);

module.exports = router;
// router.post('/login',(req,res)=>{
//  const {fname} = req.body;
//  if(fname)
//  {
//   return res.status(200).send(`welcome ${fname}`);
//  }
//   res.status(401).send('please provide crendtials')
 
// })