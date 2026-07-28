import { useParams } from "react-router-dom";
import { useState } from "react";
import data from '../../data/logements.json'


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
        <>
            <img src={rental.pictures[count]} alt={rental.title} />
            <button onClick={prev}>Précédent</button> /*Mettre des symboles de flèches*/
            <button onClick={next}>Suivant</button>
            <h2>{rental.title}</h2>
            <p>{rental.location}</p>
            <ul>
                <li>{rental.tags[0]}</li>
                <li>{rental.tags[1]}</li> 
            </ul>
            <div>
                <img src={rental.host['picture']} alt="" />
                <p>{rental.host['name']}</p>
                <p>Hôte depuis 3 ans</p>
            </div>
        </>
    )
}

export default Carousel