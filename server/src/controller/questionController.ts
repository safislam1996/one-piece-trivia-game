import Question from "../models/QuestionSchema";
import {Request,Response} from "express";
export async function getAllQuestions(req:Request,res:Response){
    const questionId=req.params;

    const question=Question.findById(questionId);

    res.json(question)
}