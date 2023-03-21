import Block from './Block'
export default function CenterBlock(props) {
    return (
        <Block className="w-50">
            <h1 className="header">Veni Vici!</h1>
            <h2> Discover the world with us!</h2>
            {props.data ?
            <div className="result-container">
                <p> {props.data[0].title} </p>
                <div className="image-container">
                    // multimedia (image and video) is not showing up
                    <img src={props.data[0].url} alt="image" className='NASA-image'/>
                </div>
                
            </div>
            :
            <p> No results found </p>
            }
            <button className="btn" onClick={() => props.handleOnClick()}>Search</button>

        </Block>
    )
}