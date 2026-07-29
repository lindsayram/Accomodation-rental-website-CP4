import { Link } from "react-router-dom";
import '../styles/global.scss';

function NotFound(){
    return (
        <>
            <section id="pageerreur">
                <h1>404</h1>
                <p>Oups, cette page n'existe pas</p>
                <Link to='/'>Retour à l'accueil</Link>
            </section>
        </>
    )
}

export default NotFound