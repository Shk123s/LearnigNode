const {people} = require('../data');
const getPeople = 
(req,res)=>{
    res.status(200).json({sucess:true,data:people})
 };

const updatePeople =
  (req,res)=>{
    const {name} = req.body;
    console.log(name)
    return res.status(200).send(`welcome ${name}`);
 };
const  EditPeople =
(req,res)=>{
    const {id}= req.params;
    const {name}= req.body;
  
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
      return res.send(`provided id ${id} not found`)
    }
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name
      }
      return person
    })
    res.status(200).json({ success: true, data: newPeople })
  }

const DeletePeople = 
(req,res)=>{
    const {id}= req.params;
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res.send(`provided id ${id} not found`)
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id))
    
      return res.status(200).json({ success: true, data: newPeople })
  };
  module.exports = {
    getPeople,
    updatePeople,
    EditPeople,
    DeletePeople,
  }