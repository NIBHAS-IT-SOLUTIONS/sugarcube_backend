const express = require('express')

let Category=require('../models/Categorymodel')  


module.exports={
    addcategory:async(req,res)=>{
        try{const {categoryname,description}=req.body.category 
        const cats = await Category.findOne({ categoryname: categoryname });
          if (cats) return res.status(400).json({ msg: "Category Already Exists. " });
        const newCategory = new Category({
            categoryname,
            description            
          });
         
          const savedcategory = await newCategory.save();
          res.status(201).json({savedcategory, msg: "Category Added Successfully" });
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
    },
    getallCategories:async (req,res)=>{

        
        try{


            const categories=await Category.find()
            if(categories.length<1) return res.status(400).json({ msg: "No categories Found" });
            res.status(201).json(categories);
        }
        catch(err){
            res.status(500).json({ error: err.message });
        }  
    }
     
}