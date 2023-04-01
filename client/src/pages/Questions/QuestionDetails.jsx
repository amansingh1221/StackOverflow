import React, { useState } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import './Questions.css'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import upvote from '../../assets/upvote.png'
import downvote from '../../assets/downvote.png'
import Avatar from '../../components/avatar/avatar'
import DisplayAnswer from './DisplayAnswer'
import { useSelector, useDispatch } from 'react-redux'
// import './Questions.css'
import { postAnswer,deleteQuestion,voteQuestion } from '../../actions/question'




const QuestionDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const questionsList = useSelector(state => state.questionsReducer)

  // console.log(questionsList)

  // var questionList = [{
  //   _id: '1',
  //   upvotes: 3,
  //   downvotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "nodejs"],
  //   userPosted: "manu",
  //   askedOn: "jan 1",
  //   userId: 1,
  //   answer: [
  //     {
  //       answerBody: 'Answer',
  //       userAnswered: 'kumar',
  //       answeredOn: "jan 2",
  //       userId: 12
  //     }
  //   ]
  // },
  // {
  //   _id: '2',
  //   upvotes: 3,
  //   downvotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "nodejs"],
  //   userPosted: "manju",
  //   askedOn: "jan 16",
  //   userId: 1,
  //   answer: [
  //     {
  //       answerBody: 'Answer',
  //       userAnswered: 'kumar',
  //       answeredOn: "jan 2",
  //       userId: 12
  //     }
  //   ]

  // },
  // {
  //   _id: '3',
  //   upvotes: 3,
  //   downvotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "nodejs"],
  //   userPosted: "mani",
  //   askedOn: "jan 14",
  //   userId: 1,
  //   answer: [
  //     {
  //       answerBody: 'Answer',
  //       userAnswered: 'kumar',
  //       answeredOn: "jan 2",
  //       userId: 12
  //     }
  //   ]
  // }]


  const [Answer, setAnswer] = useState('')
  const Navigate = useNavigate();
  const User = useSelector((state) => (state.currentUserReducer))
  const location = useLocation()
  const url = 'https://stack-overflow-aman.vercel.app/'


  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    // console.log(Answer);
    // console.log("clicked")
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate('/Auth')
    }
    else {
      if (Answer === '') {
        alert('Enter an answer before submiting')
      }
      else {
        dispatch(postAnswer({ id,
          noOfAnswers:answerLength
          +1,answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))

          
        }
        // Navigate(`/Questions/${id}`)
      }
       

  }

  const handleShare = () => {
    copy(url + location.pathname)
    alert("Copied url: " + url + location.pathname)
  }

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate))
  }

  const handleUpVote = () => {
    dispatch(voteQuestion(id,'upVote',User.result._id))
  }
  const handleDownVote = () => {
    dispatch(voteQuestion(id,'downVote',User.result._id))
  }

  return (
    <div className='question-details-page'>
      {
        questionsList.data === null ? <h1>Loading...</h1> : <>
          {
            questionsList.data.filter(question => question._id === id).map((question) => (<div key={question._id} className='ques'>
              <secton className='question-details-container'>
                <h1>
                  {question.questionTitle}
                </h1>
                <div className='question-details-container-2'>
                  <div className='question-votes'>
                    <img src={upvote} alt='' width='18' className='votes-icon' onClick={handleUpVote}></img>
                    <p>{question.upVote.length - question.downVote.length}</p>
                    <img src={downvote} alt='' width='18' className='votes-icon' onClick={handleDownVote}></img>
                  </div>
                  <div style={{ width: "100%" }}>
                    <p className='question-body'>
                      {question.questionBody}
                    </p>
                    <div className='question-details-tags'>
                      {
                        question.questionTags.map((tag) => (
                          <p key='tag'>{tag}</p>
                        ))
                      }
                    </div>
                    <div className='question-actions-user'>
                      <div>
                        <button type='button' onClick={handleShare}>Share</button>
                        {
                          User?.result?._id === question?.userId && (<button type='button' onClick={handleDelete}>Delete</button>)
                        }

                      </div>
                      <div>
                        <p>asked {moment(question.askedOn).fromNow()}</p>
                        <Link to={`/users/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}><Avatar backgroundColor='orange' px='8px' py='8px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                          <div>
                            {
                              question.userPosted
                            }
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </secton>

              {
                question.noOfAnswers !== 0 && (
                  <section>
                    <h3>
                      {
                        question.noOfAnswers
                      } Answers
                    </h3>
                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                  </section>
                )
              }
              <section className='post-ans-container'>
                <h3>
                  Your Answer
                </h3>
                <form onSubmit={(e) => { handlePostAns(e, question.answer.length)}} >
                  <textarea name='' id='' cols='30' row='30' onChange={e=>{
                    setAnswer(e.target.value)
                  }
                  }></textarea>
                  <input type='submit' className='post-ans-btn' value='Post Your Answer'></input>
                </form>
                <p>
                  Browse other Question tagged {
                    question.questionTags.map((tag) => (<Link to='/Tags' key={tag} className='ans-tags'>
                      {tag}
                    </Link>))
                  }or {
                    <Link to='/AskQuestion' style={{ textDecoration: 'none', color: '#009dff' }}>Ask your own Question.</Link>
                  }
                </p>
              </section>

            </div>))
          }
        </>
      }
    </div>
  )
}

export default QuestionDetails