import data from '../../data/logements.json'
import { useParams } from "react-router-dom";
import { useState } from 'react';

function Collapse () {
    const [isVisible, setVisible] = useState(null)

    let params = useParams()
    const infos = data.find(item => item.id == params.id)

    const display = () => {
        setVisible(!isVisible)
    }

    return(
        <div>
            <h3>Description</h3>
            <button onClick={display}>affiche</button>
            {isVisible && <p>{infos.description}</p>}

            <h3>Equipements</h3>
            <button onClick={display}>affiche</button>
            {isVisible && <p>{infos.equipments}</p>}
        </div>
    )
}

export default Collapse