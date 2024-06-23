import './App.css'
import { useState, useEffect } from 'react'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './Feedback/Feedback'
import Notification from './components/Notification/Notification'

export default function App() {
  
  
  const [reviews, setReviews] = useState(() => {
    const localData = localStorage.getItem('dataReviews')
    return localData ? JSON.parse(localStorage.getItem('dataReviews')) : {
    good: 0,
    neutral: 0,
    bad: 0
    }
  })

  const PositivePer = Math.floor((reviews.good / (reviews.good + reviews.neutral + reviews.bad)) * 100) || 0;

  useEffect(() => {
    localStorage.setItem('dataReviews', JSON.stringify(reviews))
  },[reviews])

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  function updateFeedback(feedbackType) {
    setReviews({
      ...reviews,
      [feedbackType]:  reviews[feedbackType] + 1  
    })
  }

  function reset() {
    setReviews({
    good: 0,
    neutral: 0,
    bad: 0
  })
  }

  return <>
    <Description />
    <Options
      resetFeedback={reset}
      totalFeedback={totalFeedback}
      updateFeedback={updateFeedback} />
    {totalFeedback>0 ? <Feedback PositivePer={PositivePer} totalFeedback={totalFeedback} data={reviews}/> : <Notification />}
  </> 
}

