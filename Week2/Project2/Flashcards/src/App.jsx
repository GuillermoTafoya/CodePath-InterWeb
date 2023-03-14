import { useState } from 'react'
import './App.scss'
import './components//button.scss'
import Flashcard from './components/flashcard'
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const questionsAndAnswers = [
    {question: "What is React?", answer: "A library for managing user interfaces", difficulty: "easy"},
    {question: "What is a component?", answer: "A small, reusable piece of code that returns a React element to be rendered to the page", difficulty: "easy"},
    {question: "What is a prop?", answer: "A special keyword in React that stands for properties and is being used for passing data from one component to another" , difficulty: "easy"},
    {question: "What is a state?", answer: "A special keyword in React that stands for properties and is being used for passing data from one component to another", difficulty: "easy"},
    {question: "Why would you use TypeScript over JavaScript?", answer: "TypeScript can prevent many potential runtime errors, especially as applications grow. TypeScript offers static type checking, which helps you eliminate many types of bugs and allows you to refactor your code more confidently. TypeScript can be a great tool for large applications, or for applications which are being developed by large teams.", difficulty: "medium"},
    {question: "What is a hook?", answer: "A hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.", difficulty: "medium"},
    {question: "What is a class component?", answer: "A class component is a component that extends React.Component. It has a render method that returns a React element. It also has other methods that can be used for lifecycle hooks, like componentDidMount.", difficulty: "medium"},
    {question: "What is a functional component?", answer: "A functional component is a component that is written as a JavaScript function. It takes props as an argument and returns a React element.", difficulty: "medium"},
    {question: "What is a state hook?", answer: "A state hook is a special function that lets you “hook into” React state. For example, useState is a Hook that lets you add React state to function components.", difficulty: "medium"},
    {question: "What is a side effect?", answer: "A side effect is any observable effect that a function call has besides returning a value. Side effects may include modifying a global object or a parameter passed by reference.", difficulty: "hard"},
    {question: "What is a reducer?", answer: "A reducer is a function that determines changes to an application's state. It uses the action it receives to determine this change.", difficulty: "hard"},
    {question: "What is a context?", answer: "Context provides a way to pass data through the component tree without having to pass props down manually at every level.", difficulty: "hard"},
    {question: "What is a higher order component?", answer: "A higher-order component is a function that takes a component and returns a new component.", difficulty: "hard"},
    {question: "What is a pure function?", answer: "A pure function is a function which: Given the same input, will always return the same output. Produces no side effects.", difficulty: "hard"},
  ]
  const [flashcard, setFlashcard] = useState(questionsAndAnswers[0])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [currentStreak, setCurrentStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)
  const nextFlashcard = () => {
    if (currentIdx === questionsAndAnswers.length - 1) {
      setCurrentIdx(0)
      setFlashcard(questionsAndAnswers[0])
    } else {
      setCurrentIdx(currentIdx + 1)
      setFlashcard(questionsAndAnswers[currentIdx + 1])
    }
  }
  const prevFlashcard = () => {
    if (currentIdx === 0) {
      setCurrentIdx(questionsAndAnswers.length - 1)
      setFlashcard(questionsAndAnswers[questionsAndAnswers.length - 1])
    } else {
      setCurrentIdx(currentIdx - 1)
      setFlashcard(questionsAndAnswers[currentIdx - 1])
    }
  }
  const shuffleFlashcards = () => {
    const shuffledFlashcards = questionsAndAnswers.sort(() => Math.random() - 0.5)
    setFlashcard(shuffledFlashcards)
    toast.success('Flashcards shuffled!')
    setCurrentIdx(0)
    setFlashcard(shuffledFlashcards[0])
    setLongestStreak(currentStreak>longestStreak?currentStreak:longestStreak)
    setCurrentStreak(0)
  }
  const levensteinDistance = (str1, str2) => {
    const track = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null))
    for (let i = 0; i <= str1.length; i += 1) {
      track[0][i] = i
    }
    for (let j = 0; j <= str2.length; j += 1) {
      track[j][0] = j
    }
    for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1
        track[j][i] = Math.min(
          track[j][i - 1] + 1, // deletion
          track[j - 1][i] + 1, // insertion
          track[j - 1][i - 1] + indicator, // substitution
        )
      }
    }
    return track[str2.length][str1.length]
  }
  const checkAnswer = () => {
    const answerInput = document.querySelector('.answerInput input')
    if (levensteinDistance(answerInput.value, flashcard.answer) <= 5) { // 5 is the max number of typos allowed
      toast.success('Correct!')
      setCurrentStreak(currentStreak+1)
    } else {
      toast.error('Incorrect!')
      setLongestStreak(currentStreak>longestStreak?currentStreak:longestStreak)
      setCurrentStreak(0)
    }
    answerInput.value = ''
  }

  return (
    <div className="App">
      <h1>React Flashcards</h1>
      <p>How well do you know React?</p>
      <p>{currentIdx+1+"/"+questionsAndAnswers.length}</p>
      <p>{"Current streak: "+currentStreak}</p>
      <p>{"Longest streak: "+longestStreak}</p>
      <Flashcard flashcard={flashcard} />
      <div className='answerInput'>
        <input type="text" placeholder="Type your answer here" /> 
        <button onClick={checkAnswer}>Check</button>
      </div>
      <div className="buttons">
        <button className="mainButton" onClick={prevFlashcard}>Prev</button>
        <button className="mainButton" onClick={nextFlashcard}>Next</button>
        <button className='mainButton' onClick={shuffleFlashcards}>Shuffle</button>
      </div>
      <Toaster
                    reverseOrder = {true}
                    toastOptions={{
                        className: 'Toaster',
                        duration: 3000,
                        style: {
                            background: '#363636',
                            color: '#fff',
                        }
                    }}
                />
    </div>
  )
}

export default App
