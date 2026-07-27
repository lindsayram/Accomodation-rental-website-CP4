import { Link } from "react-router-dom";
import './navbar.scss'

const Navbar = () => {
    return(
        <nav>
            <Link to='/'>Accueil</Link>
            <Link to='#'>A propos</Link>
            <Link to='#'>Contact</Link>
        </nav>
    )
}

export default Navbar