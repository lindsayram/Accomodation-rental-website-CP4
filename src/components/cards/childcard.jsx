import { Link } from "react-router-dom"

function ChildCard(props) {
    const stars =Array(5).fill(props.rating)

    return (
        <article className="card">
            <Link to={`/logement/${props.id}`}>
                <img src={props.picture} alt={props.title}/>
                <div className="infoZone">
                    <h3>{props.title}</h3>
                    <p><i className="fa-solid fa-location-dot"></i>{props.location}</p>
                    <ul className="tags">
                        <li>{props.tag1}</li>
                        <li>{props.tag2}</li>
                    </ul>
                    
                    <ul className="rating">
                        {stars.map((item, index) =>
                            index < props.rating? 
                            <li key={index}><i className="fa-solid fa-star star-yellow"></i></li> : 
                            <li key={index}><i className="fa-solid fa-star star-empty"></i></li> 
                        )}
                        <li id="note">({props.rating})</li>
                    </ul>   
                                             
                </div>
            </Link>
        </article>
    )
}

export default ChildCard
