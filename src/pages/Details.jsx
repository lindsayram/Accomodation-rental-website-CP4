// import { useParams } from "react-router-dom"
import Header from "../components/header/header"
import Carousel from "../components/carrousel/carrousel";
import Collapse from "../components/collapse/collapse";
import Footer from "../components/footer/footer"

function Details() {

    return(
        <>
            <Header/>

            <section id="details">
                <Carousel/>
                <Collapse/>
            </section>
            
            <Footer/>
        </>
    )
}

export default Details