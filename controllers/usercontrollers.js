const express=require('express')
let User = require('../models/Usermodel');


module.exports={
    signup:(req,res)=>{
        console.log("success");
        console.log(req.body);

        res.status(200).json(req.body)
    }
}