import React from 'react'
import "./button.scss"
export default function NewRandomFlashcardButton({ setFlashcards, flashcards }) {
    return (
        <button className="mainButton" onClick={() => {
            const index = Math.floor(Math.random() * flashcards.length)
            setFlashcards(flashcards[index])
        }}>New Random Flashcard</button>
    )
}
