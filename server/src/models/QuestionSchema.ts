import mongoose from "mongoose";


const Schema=mongoose.Schema;

const QuestionSchema=new Schema({
    question: String,
    options: [String]
})
const QuestionModel=mongoose.model("Question",QuestionSchema)

export default QuestionModel