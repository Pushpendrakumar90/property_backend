const express = require('express');
const router = express.Router();
const Property = require('../models/propertySchema');

//get all property
router.get('/', async(req,res)=>{
    let data = await Property.find();
    res.send(data)
})

// get by id
router.get('/:id', async(req,res)=>{
    let id = req.params.id;
    let data = await Property.find({_id: id});
    res.send(data)
})

// create property 
router.post('/', async(req,res)=>{
    try{
    let property =  new Property(req.body);
    await property.save()
    res.status(201).json({msg: 'property saved', id: property._id});
 }
 catch(err){
    console.log(err.message)
    res.status(500).json({msg: err.message});
 }
})

// delete property by id
router.delete('/:id', async(req,res)=>{
    let id = req.params.id;
    let data = await Property.findOneAndDelete({_id: id});
    console.log(id, " is deleted")
    res.json({msg: 'deleted' , id: id})
})

// find  and update
router.patch('/:id', async(req,res)=>{
    try{
    let id = req.params.id;
    let data = await Property.findByIdAndUpdate(id, req.body, {new : true});
    console.log(id, " updated")
    res.json({msg: 'updated' , id: id})
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
})


module.exports= router;