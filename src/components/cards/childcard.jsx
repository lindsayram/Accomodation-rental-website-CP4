import { Link } from "react-router-dom"

function ChildCard(props) {
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
                    <p>{props.rating}</p>
                </div>
            </Link>
        </article>
    )
}

export default ChildCard
