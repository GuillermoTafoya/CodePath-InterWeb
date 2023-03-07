import React, { useState } from 'react'
import './flashcard.scss'
export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    
    return (
        <div  onClick={() => setFlip(!flip)}className={flip ? "back" : "front"}>{flip ? "Answer: " + flashcard.answer : "Question: " + flashcard.question}</div>
    )
    }