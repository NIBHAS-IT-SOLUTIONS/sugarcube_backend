const express = require('express')
let User = require('../models/Usermodel');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


module.exports = {
    signup: async (req, res) => {
        try{
        const {
            username,
            email,
            password
          } = req.body;
      
          const salt = await bcrypt.genSalt();
          const passwordHash = await bcrypt.hash(password, salt);
      
          const newUser = new User({
            username,
            email,
            password: passwordHash
          });
          const savedUser = await newUser.save();
          res.status(201).json(savedUser);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
    },
    login: async(req,res) => {

        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email: email });
            if (!user) return res.status(400).json({ msg: "User does not exist. " });
        
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
        
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
            delete user.password;
            res.status(200).json({ token, user });
          } catch (err) {
            res.status(500).json({ error: err.message });
          }

    }
}