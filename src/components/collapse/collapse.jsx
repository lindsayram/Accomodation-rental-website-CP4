import data from '../../data/logements.json'
import { useParams } from "react-router-dom";
import { useState } from 'react';
import './collapse.scss';

function Collapse () {
    const [descVisible, setDescVisible] = useState(null)
    const [equipVisible, setEquipVisible] = useState(null)
    
    const [isRotate, setRotate] = useState(false)
    const [isRotate2, setRotate2] = useState(false)

    let params = useParams()
    const infos = data.find(item => item.id == params.id)

    const displayDesc = () => {
        setDescVisible(!descVisible)

        setRotate(!isRotate)    
    }

    const displayEquip = () => {
        setEquipVisible(!equipVisible)

        setRotate2(!isRotate2)
    }
    
    // sélectionner element HTML
    // faire une boucle pour insérer dans <li>
    return(
        <div id='collapses'>
            <article className='collapse'>
                <div>
                    <h3>Description</h3>
                    <button onClick={displayDesc} className={isRotate? 'rotate':  ''}><i className="fa-solid fa-arrow-down"></i></button>
                </div>
                {descVisible && <p>{infos.description}</p>}
            </article>
            
            <article className='collapse'>
                <div>
                    <h3>Equipements</h3>
                    <button onClick={displayEquip} className={isRotate2? 'rotate':  ''}><i className="fa-solid fa-arrow-down"></i></button>
                </div>               
                {equipVisible && 
                    <ul>
                        {infos.equipments.map((element, index) => 
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                }               
            </article>  
        </div>
    )
}

export default Collapse