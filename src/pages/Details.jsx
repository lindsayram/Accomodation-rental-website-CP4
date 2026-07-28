// import { useParams } from "react-router-dom"
import Navbar from "../components/navbar/navbar"
import Carousel from "../components/carrousel/carrousel";
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
                {/* <h2>{params.id}</h2> */}
                <Carousel/>
            </section>
            <Footer/>
        </>
    )
}

export default Details