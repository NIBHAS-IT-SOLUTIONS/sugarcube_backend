const router = require('express').Router();
//const {} = require('');
const { verifyToken } = require('../middlewares/auth');




router.get('/addmenu',verifyToken)

module.exports=router