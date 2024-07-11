const router = require('express').Router();
const {addcategory,getallCategories} = require('../controllers/catergorycontrollers');
const { verifyToken,verifyAdmin } = require('../middlewares/auth');




router.post('/addcategory',verifyAdmin,addcategory)
router.get('/getcategories',verifyAdmin,getallCategories)




module.exports=router