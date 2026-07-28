import ChildCard from './childcard';
import data from '../../data/logements.json';

function Card() {
   
    return (
        <div>
            {data.map(element => (
                <ChildCard
                    key={element.id}
                    id={element.id}
                    title={element.title}
                    picture={element.pictures[0]}
                    location={element.location}
                    tag1={element.tags[0]}
                    tag2={element.tags[1]}
                    rating={element.rating}
                />
            ))}
        </div>
    )
}

export default Card;