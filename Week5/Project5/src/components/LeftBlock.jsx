import React, { useEffect } from 'react'
import Block from './Block'
export default function LeftBlock(props) {
    useEffect(() => {
        // scroll the past-data div to top, to show the latest data
        const pastDataDiv = document.getElementById('past-data')
        pastDataDiv.scrollTop = 0
        
        console.log("here")
    }, [props.pastData])



    return (
        <Block className="w-20 left-container">
            <h1 className="header">Weather App</h1>
            <div className='past-data' id='past-data'>
                    
            {
                
                props.pastData.map((data, index) => {
                    return (
                        <div key={index}>
                            <img src={data[0].url} alt="cat-image" className='image'/>
                            <p>{data[0].breeds[0].name}</p>
                        </div>
                    )
                })
            }
            </div>
        </Block>
    )
}