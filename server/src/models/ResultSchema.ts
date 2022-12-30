import mongoose,{Schema} from "mongoose";



const ResultSchema=new Schema({
    username: String,
    results: {type:Array,default:[]},
    attempts:{type:Number,default:0},
    points:{type:Number,default:0},
})
const ResultModel=mongoose.model("Result",ResultSchema)

export default ResultModel