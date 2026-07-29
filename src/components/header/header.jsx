import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';
import './header.scss'

const Header = () => {
    return(
        <>
            <header>
                <div className='container'>
                    <h1><Link to='/'>Kasa</Link></h1>
                    <Navbar/>
                </div>
            </header>
        </>
    )
}
export default Header