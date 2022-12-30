import express,{Request,Response} from "express";
import mongoose from 'mongoose'
const app=express();

const PORT=5000;

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://one_piece_trivia:7JaV6Yyvu4gpzp0a@cluster0.nt8dmh1.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log(`Listening to PORT:${PORT}`)
    app.listen(PORT)
})

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello Wrold')
});

