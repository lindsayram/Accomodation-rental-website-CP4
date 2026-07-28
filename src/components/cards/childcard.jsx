import { Link } from "react-router-dom"

function ChildCard(props) {
    const stars =Array(5).fill(props.rating)

    return (
        <article className="card">
            <Link to={`/logement/${props.id}`}>
                <img src={props.picture} alt={props.title}/>
                <div className="infoZone">
                    <h3>{props.title}</h3>
                    <p><i class="fa-solid fa-location-dot"></i>{props.location}</p>
                    <ul>
                        <li>{props.tag1}</li>
                        <li>{props.tag2}</li>
                    </ul>
                    
                    
                    <ul>
                        {stars.map((item, index) =>
                            index < props.rating? 
                            <li key={index}><i class="fa-solid fa-star"></i></li> : 
                            <li><i class="fa-regular fa-star"></i></li> 
                        )}
                        <li>({props.rating})</li>
                    </ul>   
                                             
                </div>
            </Link>
        </article>
    )
}

export default ChildCard
