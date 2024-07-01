const router = require('express').Router();
let {signup}=require('../controllers/usercontrollers')

router.post('/signup',signup)


module.exports=router