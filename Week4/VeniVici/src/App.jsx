import React, {useState, useEffect} from 'react'
import LeftBlock from './components/LeftBlock'
import CenterBlock from './components/CenterBlock'
import RightBlock from './components/RightBlock'
import {getCatData} from './utils/catAPI'
import './App.scss'
function App() {
  const [data, setData] = useState(null)
  const [bannedTags, setBannedTags] = useState([])
  const [pastData, setPastData] = useState([])
  const retrieveData = (recursionDepth = 0) => {
    getCatData().then((data) => {
      if (recursionDepth > 10) {
        alert('No results found')
        setData(null)
        return;
      }
      // Check if any of the tags are banned
      const tags = data[0].breeds[0].temperament.split(',')
      // trim and lowercase the tag
      const trimmedTags = tags.map((tag) => tag.trim().toLowerCase())
      const bannedTagFound = trimmedTags.some((tag) => bannedTags.includes(tag))
      if (bannedTagFound) {
        retrieveData(recursionDepth + 1)
        return;
      }
      if (data){
        setPastData([...pastData, data])
      }
      setData(data)
    })
  }
  const handleTagClick = (tag) => {
    // If tag is already in bannedTags, remove it,
    // otherwise add it
    if (bannedTags.includes(tag)) {
      setBannedTags(bannedTags.filter((bannedTag) => bannedTag !== tag))
    } else {
      setBannedTags([...bannedTags, tag])
    }
  }
  return (
    <div className="App">
      <LeftBlock pastData={pastData} />
      <CenterBlock handleOnClick={retrieveData} data={data} handleTagClick={handleTagClick} />
      <RightBlock bannedTags={bannedTags} handleTagClick={handleTagClick} />
    </div>
  )
}

export default App
