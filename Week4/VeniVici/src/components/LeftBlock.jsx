import Block from './Block'
export default function LeftBlock(props) {
    return (
        <Block className="w-20 past-data-container">
            <h2>What have we seen so far?</h2>
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
        </Block>
    )
}