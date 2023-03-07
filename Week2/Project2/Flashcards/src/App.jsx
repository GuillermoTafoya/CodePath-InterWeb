import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Flashcard from './components/flashcard'
import NewRandomFlashcardButton from './components/newRandomFlashcardButton'

function App() {
  const questionsAndAnswers = [
    {question: "What is React?", answer: "A library for managing user interfaces"},
    {question: "What is a component?", answer: "A small, reusable piece of code that returns a React element to be rendered to the page"},
    {question: "What is a prop?", answer: "A special keyword in React that stands for properties and is being used for passing data from one component to another"},
    {question: "What is a state?", answer: "A special keyword in React that stands for properties and is being used for passing data from one component to another"},
    {question: "Why would you use TypeScript over JavaScript?", answer: "TypeScript can prevent many potential runtime errors, especially as applications grow. TypeScript offers static type checking, which helps you eliminate many types of bugs and allows you to refactor your code more confidently. TypeScript can be a great tool for large applications, or for applications which are being developed by large teams."},
  ]
  const [flashcard, setFlashcard] = useState(questionsAndAnswers[0])
  console.log(flashcard)
  console.log(flashcard.question)
  console.log(flashcard.answer)
  return (
    <div className="App">
      <Flashcard flashcard={flashcard} />
      <NewRandomFlashcardButton setFlashcards={setFlashcard} flashcards={questionsAndAnswers} />
    </div>
  )
}

export default App
