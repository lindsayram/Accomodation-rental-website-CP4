import data from '../../data/logements.json'
import { useParams } from "react-router-dom";
import { useState } from 'react';
import './collapse.scss';

function Collapse () {
    const [descVisible, setDescVisible] = useState(null)
    const [equipVisible, setEquipVisible] = useState(null)

    let params = useParams()
    const infos = data.find(item => item.id == params.id)

    const displayDesc = () => {
        setDescVisible(!descVisible)
    }
    const displayEquip = () => {
        setEquipVisible(!equipVisible)
    }

    return(
        <div id='collapses'>
            <article className='collapse'>
                <div>
                    <h3>Description</h3>
                    <button onClick={displayDesc}><i class="fa-solid fa-arrow-down"></i></button>
                </div>
                {descVisible && <p>{infos.description}</p>}
            </article>
            
            <article className='collapse'>
                <div>
                    <h3>Equipements</h3>
                    <button onClick={displayEquip}><i class="fa-solid fa-arrow-down"></i></button>
                </div>               
                {equipVisible && <p>{infos.equipments}</p>}               
            </article>  
        </div>
    )
}

export default Collapse