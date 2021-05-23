const express=require('express');
const router=express.Router();
const ObjectId=require('mongoose').Types.ObjectId;
//getting the models
const {Question,Option,Answer}=require('../models/model');
//CRUD for Questions
//getting the questions
router.get('/questions',(req,res)=>{
    Question.find((err,docs)=>{
        if(err){
            res.status(500).send({errorMessage:"Questions cannot be retrived"})
        }
        res.send(docs)
    })
})
//getting the particular question using id
router.get('/questions/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    Question.findById(req.params.id,(err,docs)=>{
        if(err){
            res.status(500).send({errorMessage:"Question cannot be fetched"})
        }
        res.send(docs)
    })
})
//creating a new question
router.post('/questions',(req,res)=>{
    const newQuestion=new Question({
        question:req.body.question
    })
    newQuestion.save((err,docs)=>{
        if(err){
            if(err.name==="ValidationError"){
                res.status(400).send({ errorMessage: "question needed in the body" })
            }
            else{
               res.status(500).send({errorMessage: "Question could not be posted." })
            }
        }
        res.send(docs);
    })
})
//updating a question
router.put('/questions/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    const updatedQuestion={
        question:req.body.question
    }
    Question.findByIdAndUpdate(req.params.id,{$set:updatedQuestion},{new:true},(err,docs)=>{
        if(err){
            res.status(500).send({errorMessage: "Question could not be updated." })
        }
        res.send(docs)
    })
})
//removing a question
router.delete('/questions/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    Question.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(err){
            res.status(500).send({errorMessage: "Question could not be deleted." })
        }
        res.send(docs)
    })
})

//CRUD for options
//getting the options
router.get('/options',(req,res)=>{
    Option.find((err,docs)=>{
        if(err){
            res.status(500).send({errorMessage:"Options cannot be retrived"})
        }
        res.send(docs)
    })
})
//getting the particular option using id
router.get('/options/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    Option.findById(req.params.id,(err,docs)=>{
        if(err){
            res.status(500).send({errorMessage:"Option cannot be fetched"})
        }
        res.send(docs)
    })
})
//creating a new option
router.post('/options',(req,res)=>{
    const newOption=new Option({
        optionA:req.body.optionA,
        optionB:req.body.optionB,
        optionC:req.body.optionC,
        optionD:req.body.optionD
    })
    newOption.save((err,docs)=>{
        if(err){
            if(err.name==="ValidationError"){
                res.status(400).send({ errorMessage: "Option needed in the body" })
            }
            else{
               res.status(500).send({errorMessage: "Option could not be posted." })
            }
        }
        res.send(docs);
    })
})
//updating a question
router.put('/options/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    const updatedOption={
        optionA:req.body.optionA,
        optionB:req.body.optionB,
        optionC:req.body.optionC,
        optionD:req.body.optionD
    }
    Option.findByIdAndUpdate(req.params.id,{$set:updatedOption},{new:true},(err,docs)=>{
        if(err){
            res.status(500).send({errorMessage: "Option could not be updated." })
        }
        res.send(docs)
    })
})
//removing a question
router.delete('/options/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    Option.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(err){
            res.status(500).send({errorMessage: "Option could not be deleted." })
        }
        res.send(docs)
    })
})
//CRUD for answers
//getting the answers
router.get('/answers',(req,res)=>{
    Answer.find((err,docs)=>{
        if(err){
            res.status(500).send({errorMessage:"Answers cannot be retrived"})
        }
        res.send(docs)
    })
})
//getting the particular answer using id
router.get('/answers/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    Answer.findById(req.params.id,(err,docs)=>{
        if(err){
            res.status(500).send({errorMessage:"Answer cannot be fetched"})
        }
        res.send(docs)
    })
})
//creating a new answer
router.post('/answers',(req,res)=>{
    const newAnswer=new Answer({
        answer:req.body.answer
    })
    newAnswer.save((err,docs)=>{
        if(err){
            if(err.name==="ValidationError"){
                res.status(400).send({ errorMessage: "Answer needed in the body" })
            }
            else{
               res.status(500).send({errorMessage: "Answer could not be posted." })
            }
        }
        res.send(docs);
    })
})
//updating a answer
router.put('/answers/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    const updatedAnswer={
        answer:req.body.answer
    }
    Answer.findByIdAndUpdate(req.params.id,{$set:updatedAnswer},{new:true},(err,docs)=>{
        if(err){
            res.status(500).send({errorMessage: "Answer could not be updated." })
        }
        res.send(docs)
    })
})
//removing a answer
router.delete('/answers/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        res.status(400).send({errorMessage:"Invalid Id"})
    }
    Answer.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(err){
            res.status(500).send({errorMessage: "Answer could not be deleted." })
        }
        res.send(docs)
    })
})
module.exports=router;