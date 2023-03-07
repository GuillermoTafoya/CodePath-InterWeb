import React, { useState } from 'react'
import './flashcard.scss'
import reactLogo from '../assets/react.svg'
export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    
    return (
        <div  
        onClick={() => setFlip(!flip)} 
        className={(flip ? "back" : "front") + '-' + (flashcard.difficulty)}>
            <h3>
                {flip ? "Answer: " + flashcard.answer : "Question: " + flashcard.question}
            </h3>
            <img src={reactLogo} alt="react logo" />
            <p>
                {"Difficulty: " + (flashcard.difficulty)}
            </p>
        </div>
    )
    }