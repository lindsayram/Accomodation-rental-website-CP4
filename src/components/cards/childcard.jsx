import { Link } from "react-router-dom"

function ChildCard(props) {
    return (
        <div>
            <Link to={`/details/${props.id}`}>
                <img src={props.picture} alt={props.title}/>
                <h3>{props.title}</h3>
                <p>{props.location}</p>
                <ul>
                    <li>{props.tag1}</li>
                    <li>{props.tag2}</li>
                </ul>
                <p>{props.rating}</p>
            </Link>
        </div>
    )
}

export default ChildCard
