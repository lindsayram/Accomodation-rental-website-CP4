// import { useParams } from "react-router-dom"
import Navbar from "../components/navbar/navbar"
import Carousel from "../components/carrousel/carrousel";
import Collapse from "../components/collapse/collapse";
import Footer from "../components/footer/footer"
import { Link } from "react-router-dom";

function Details() {

    return(
        <>
            <header>
                <h1><Link to='/'>Kasa</Link></h1>
                <Navbar/>
            </header>
            <section>
                <Carousel/>
                <Collapse/>
            </section>
            <Footer/>
        </>
    )
}

export default Details