import mongoose from "mongoose";


const Schema=mongoose.Schema;

const QuestionSchema=new Schema({
    question: {type: String,default:''},
    options: [
       {
        answer:String,
        isCorrect:Boolean
       }
    ]
})
const QuestionModel=mongoose.model("Question",QuestionSchema)

export default QuestionModel