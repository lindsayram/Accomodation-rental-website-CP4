<<<<<<< HEAD
// import { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Intro from "../components/intro/intro";
import Card from "../components/cards/cards";
import Footer from "../components/footer/footer";
=======
import Navbar from "../components/navbar/navbar"
import Intro from "../components/intro/intro"
import Card from "../components/cards/cards"
import Footer from "../components/footer/footer"
>>>>>>> 0b603c55e92acc18ba3f45efbbd74876e26e112e

function Home() {
    
    return(
        <>
            <header className="">
                <h1>Kasa</h1>
                <Navbar/>
            </header>

            <main>
                <Intro />
<<<<<<< HEAD
                <section id="accomodations">
                    <Card/>
                </section>
=======
                <Card/>
>>>>>>> 0b603c55e92acc18ba3f45efbbd74876e26e112e
            </main>

            <Footer/>
        </>
    )
}

export default Home