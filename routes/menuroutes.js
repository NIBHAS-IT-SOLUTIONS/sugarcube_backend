const router = require('express').Router();
const {addmenu} = require('../controllers/menucontrollers');
const { verifyToken } = require('../middlewares/auth');




router.get('/addmenu',verifyToken,addmenu)

module.exports=router