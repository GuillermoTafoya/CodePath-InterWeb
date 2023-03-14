import React, { useEffect, useState } from 'react'
import './flashcard.scss'
import reactLogo from '../assets/react.svg'

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    let handleClick = async () => {
        setFlip(!flip)
        //card.classList.toggle('is-flipped');
        let card = document.querySelector('.card')
        card.classList.toggle('is-flipped')
        console.log(flashcard.difficulty)
    }
    return (
        <div className="scene scene--card">
            <div className="card">
                <div className={"card__face card__face--front" + ' ' + (flashcard.difficulty)} onClick={handleClick}  >
                    <div>
                        <p>{"Answer: " + flashcard.answer}</p>
                        <p>{"Difficulty: " + (flashcard.difficulty)} </p>
                    </div>
                    
                </div>
                <div className={"card__face card__face--back" + ' ' + (flashcard.difficulty)}  onClick={handleClick}>
                    <div>
                        <p>{"Question: " + flashcard.question}</p>
                        <p>{"Difficulty: " + (flashcard.difficulty)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
    }