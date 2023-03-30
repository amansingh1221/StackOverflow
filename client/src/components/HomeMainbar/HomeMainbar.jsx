import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import {useSelector} from 'react-redux'

const HomeMainbar = () => {
  const location = useLocation()
  const user=1;
  const navigate=useNavigate()
  const checkAuth=()=>{
    if(user===null){
      alert("Login or Signup to ask Question");
    navigate('/Auth') 
    }
    else{
      navigate('/AskQuestion')
    }
    
  }

  const questionsList=useSelector(state=>state.questionsReducer)
  // console.log(questionsList)

  // var questionList = [{
  //   _id: 1,
  //   upvotes: 3,
  //   downvotes:2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "nodejs"],
  //   userPosted: "manu",
  //   askedOn: "jan 1",
  //   userId:1,
  //   answer:[
  //     {
  //       answerBody:'Answer',
  //       userAnswered:'kumar',
  //       answeredOn:"jan 2",
  //       userId:12
  //     }
  //   ]
  // },
  // {
  //   _id: 2,
  //   upvotes: 3,
  //   downvotes:2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "nodejs"],
  //   userPosted: "manju",
  //   askedOn: "jan 16",
  //   userId:1,
  //   answer:[
  //     {
  //       answerBody:'Answer',
  //       userAnswered:'kumar',
  //       answeredOn:"jan 2",
  //       userId:12
  //     }
  //   ]

  // },
  // {
  //   _id: 3,
  //   upvotes: 3,
  //   downvotes:2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "nodejs"],
  //   userPosted: "mani",
  //   askedOn: "jan 14",
  //   userId:1,
  //   answer:[
  //     {
  //       answerBody:'Answer',
  //       userAnswered:'kumar',
  //       answeredOn:"jan 2",
  //       userId:12
  //     }
  //   ]
  // }]

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
            <h1>Loading....</h1> :
            <>
              <p>{questionsList.data.length} Questions</p>
              <QuestionList questionsList={questionsList.data} />
            </>
        }
      </div>

    </div>
  )
}

export default HomeMainbar