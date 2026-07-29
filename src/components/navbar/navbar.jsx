import { Link } from "react-router-dom";
import './navbar.scss'
import { useState } from "react";
// import CollapseNavbar from "../collapsenavbar/collapsenavbar";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    const Burgeropenning = () => {
        setOpen(!isOpen)
    }

    return(
        <nav className="navbar">
            <button className='toggle' onClick={Burgeropenning}>
                <i className="fa-solid fa-bars"></i>
            </button>
            
            <ul className= {`linkmenu ${isOpen? 'navbar-open' : ''}`}>
                <li className="linkitem"><Link to='/' onClick={Burgeropenning}>Accueil</Link></li>
                <li className="linkitem"><Link to='#' onClick={Burgeropenning}>A propos</Link></li>
                <li className="linkitem"><Link to='#' onClick={Burgeropenning}>Contact</Link></li>
            </ul>            
        </nav>
        
    )
}

export default Navbar