import { useState, useEffect, useParams } from "react"
import data from '../../data/logements.json'

function Carrousel () {
    const [count, setCount] = useState(0)
    let id = useParams()
    const pictures = data[id].pictures

    const next = () =>{
        if(count> pictures.length-1){
            setCount(0)
        } else {
            setCount(count + 1)
        }
    }

    const prev = () => {
        if(count< 0) {
            setCount(pictures.length)
        } else {
            setCount(count - 1)
        }
    }

    return (
        <section id="details">
            <div>
                <img src={pictures[count]} alt={data.title} />
                <button onClick={prev}><img src="../../assets/telecharger-arrow.png" alt="arrow previous"/></button>
                <button onClick={next}><img src="../../assets/telecharger-arrow.png" alt="arrow previous"/></button>
            </div>
            <div>
                <h2>{data.title}</h2>
                <p>{data.location}</p>
                <ul>
                    <li>{data.tags[0]}</li>
                    <li>{data.tags[1]}</li>
                </ul>
                <div>
                    <img src={data.host.picture} alt="host" />
                    <p>{data.host.name}</p>
                </div>
                <div>
                    {/* collapse */}
                </div>
            </div>
        </section>
    )
}

export default Carrousel