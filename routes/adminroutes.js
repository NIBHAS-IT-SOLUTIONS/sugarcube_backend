const router = require('express').Router();
let {addadmin,adminlogin}=require('../controllers/admincontrollers')

router.post('/addadmin',addadmin)
router.post('/adminlogin',adminlogin)


module.exports=router