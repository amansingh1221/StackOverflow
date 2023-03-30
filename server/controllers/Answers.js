import mongoose from 'mongoose'
import Questions from '../models/Questions.js'

export const postAnswer = async(req, res) => {
  // console.log("hello")
  const { id: _id } = req.params;
  // console.log(req.params);
  // console.log(req.body);
  const { noOfAnswers, answerBody, userAnswered,userId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('question unavailable......');
  }
  updateNoOfAnswers(_id, noOfAnswers);
  try {

    const updateQuestion = await Questions.findByIdAndUpdate(_id)

    let data={
      answerBody:answerBody, userAnswered:userAnswered,userId:userId
    }
    updateQuestion.answer.push(data)
    updateQuestion.save()
   

    res.status(200).json(updateQuestion)
  } catch (error) {
    res.status(400).json('error')
  }
}


const updateNoOfAnswers = async (_id, noOfAnswers) => {
  try {
    await Questions.findByIdAndUpdate(_id, { $set: { 'noOfAnswers': noOfAnswers } })
  }
  catch (error) {
    console.log(error);
  }
}

export const deleteAnswer=async(req,res)=>{
  const {id:_id}=req.params
  const {answerId,noOfAnswers}=req.body 
  // console.log(req.body);

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('question unavailable......')

  }
  if (!mongoose.Types.ObjectId.isValid(answerId)) {
    return res.status(404).send('answer unavailable......')

  }
 
 try{
  await Questions.updateOne(
    {_id},
    {$pull:{'answer':{_id:answerId}}}
  )
  res.status(200).json({message:"Answer deleted successfully..."})
  updateNoOfAnswers(_id,noOfAnswers)
 }
 catch(error){
  res.status(405).json(error)
 }
 

}