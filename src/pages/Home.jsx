// import { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Intro from "../components/intro/intro";
import Card from "../components/cards/cards";
import Footer from "../components/footer/footer";

function Home() {
    
    return(
        <>
            <header className="">
                <h1>Kasa</h1>
                <Navbar/>
            </header>

            <main>
                <Intro />
                <section id="accomodations">
                    <Card/>
                </section>
            </main>

            <Footer/>
        </>
    )
}

export default Home