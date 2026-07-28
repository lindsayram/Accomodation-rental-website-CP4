import { useParams } from "react-router-dom";
import { useState } from "react";
import data from '../../data/logements.json';
import './carrousel.scss';

function Carousel() {
    const [count, setCount] = useState(0)

    let params = useParams();   
    let rental = data.find(element =>element.id == params.id)

    const next = () =>{
        setCount((index) => (index) === rental.pictures.length-1 ? 0 : index + 1
        )
    }

    const prev = () => {
        setCount((index) => (index) === 0 ? 1 : index -1
        )
    }

    return (
        <>  <div id="slider">
                <img src={rental.pictures[count]} alt={rental.title} />
                <div>
                    <button onClick={prev}><i class="fa-solid fa-arrow-left"></i></button>
                    <button onClick={next}><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            
            <article id="infos-details">
                <h2>{rental.title}</h2>
                <p><i class="fa-solid fa-location-dot"></i>{rental.location}</p>
                <ul>
                    <li>{rental.tags[0]}</li>
                    <li>{rental.tags[1]}</li> 
                </ul>
                <div id="host">
                    <img src={rental.host['picture']} alt="" />
                    <div>
                        <p id="identity">{rental.host['name']}</p>
                        <p>Hôte depuis 3 ans</p>
                    </div>
                </div>
            </article>   
        </>
    )
}

export default Carousel