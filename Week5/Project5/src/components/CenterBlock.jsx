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
export default function CenterBlock(props) {
    const [tags, setTags] = useState([])
    useEffect(() => {
        // Collect attributes to display in tags
        if (props.data) {
            const tags = []
            props.data[0].breeds[0].temperament.split(',').forEach((tag) => {
                // trim and lowercase the tag
                const trimmedTag = tag.trim().toLowerCase()
                tags.push(trimmedTag)
            }
            )
            setTags(tags)
        }
    }, [props.data])
    const handleTagClick = (index) => {
        props.handleTagClick(tags[index])
    }
    return (
        <Block className="w-50">
            <h1 className="header">Weather App</h1>
            <h2 className='subheader'>{!props.data ? "Discover the world with us!!" : props.data[0].breeds[0].name}</h2>
            {props.data ?
            <div className="result-container">
                <div className='tagArea-tags'>
                    {tags.map((tag, index) => <Tag text={tag} onClick={() => handleTagClick(index)} key={index} />)}
                </div>
                <div className="image-container">
                    <img src={props.data[0].url} alt="cat-image" className='image'/>
                </div>
                
            </div>
            :
            <p> No results found </p>
            }
            <button className="btn" onClick={() => props.handleOnClick()}>Discover!</button>

        </Block>
    )
}