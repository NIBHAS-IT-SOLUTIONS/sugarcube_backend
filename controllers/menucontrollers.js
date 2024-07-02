const express = require('express')


module.exports = {

    addmenu:async(req,res)=>{
        res.status(400).json({ msg: "User does not exist. " });
    }

}