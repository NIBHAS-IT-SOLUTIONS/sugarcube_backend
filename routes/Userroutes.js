const router = require('express').Router();
let {signup,login}=require('../controllers/usercontrollers')

router.post('/signup',signup)
router.post('/login',login)


module.exports=router