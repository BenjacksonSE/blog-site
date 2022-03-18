const router = require("express").Router();
const User = require('../models/User');

//Update
router.post('/register', async (req,res)=>{
  try{

  } catch(err){
    res.status(500).json(err);
  }
})

//Delete

module.exports = router;

