const mongoose=require('mongoose'),Schema=mongoose.Schema;
//Defining the Schema for questions
const questionSchema=new Schema({
    question:{type:String,required:true}
})
//schema for options
const optionSchema=new Schema({
    optionA:{type:Object,required:true},
    optionB:{type:Object,required:true},
    optionC:{type:Object,required:true},
    optionD:{type:Object,required:true},
})
//schema for answers
const answerSchema=new Schema({
    answer:{type:String,required:true}
})
//Creating a model for question,answer,option
const Question=mongoose.model("Question",questionSchema);
const Option=mongoose.model("Option",optionSchema);
const Answer=mongoose.model("Answer",answerSchema);
module.exports={Question,Option,Answer}