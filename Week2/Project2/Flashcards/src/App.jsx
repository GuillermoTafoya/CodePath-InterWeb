import { useState } from 'react'
import './App.scss'
import Flashcard from './components/flashcard'
import NewRandomFlashcardButton from './components/newRandomFlashcardButton'

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
  return (
    <div className="App">
      <h1>React Flashcards</h1>
      <p>How well do you know React?</p>
      <Flashcard flashcard={flashcard} />
      <NewRandomFlashcardButton setFlashcards={setFlashcard} flashcards={questionsAndAnswers} />
    </div>
  )
}

export default App
