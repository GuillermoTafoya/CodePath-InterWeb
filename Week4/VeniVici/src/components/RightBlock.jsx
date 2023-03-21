import { useState, useEffect } from 'react'
import Block from './Block'
const Tag = (props) => {
    return (
        <div className='tag-container '>
            <div className='tag-content fader' onClick={props.onClick}>
            {props.text}
            </div>
        </div>
    );
}
export default function RightBlock(props) {
    const handleTagClick = (index) => {
        props.handleTagClick(props.bannedTags[index])
    }

    return (
        <Block className="w-20">
            <div>
                <h2>Ban List</h2>
                <p>Select an attribute in your listing to ban it. </p>
                <div className='right-tags'>
                    {props.bannedTags.map((tag, index) => <Tag text={tag} onClick={() => handleTagClick(index)} key={index} />)}
                </div>
            </div>
            
        </Block>
    )
}