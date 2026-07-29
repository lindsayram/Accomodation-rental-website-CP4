import { Link } from "react-router-dom";
import './navbar.scss'
import CollapseNavbar from "../collapsenavbar/collapsenavbar";

const Navbar = () => {
    return(
        <nav>
            <Link to='/'>Accueil</Link>
            <Link to='#'>A propos</Link>
            <Link to='#'>Contact</Link>
            <CollapseNavbar/>
        </nav>
    )
}

export default Navbar