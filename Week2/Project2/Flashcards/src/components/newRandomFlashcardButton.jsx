import React from 'react'
import "./button.scss"
export default function NewRandomFlashcardButton({ setFlashcards, flashcards}) {
    return (
        <button className="mainButton" onClick={() => {
            // while indez is the same as the previous index, generate a new index
            // Math.random() * flashcards.length returns a number between 0 and the length of the array
            const previousIndex = flashcards.indexOf(flashcards)
            let index = Math.floor(Math.random() * flashcards.length)
            while (index === previousIndex) {
                index = Math.floor(Math.random() * flashcards.length)
            }
            setFlashcards(flashcards[index])
        }}>New Random Flashcard</button>
    )
}