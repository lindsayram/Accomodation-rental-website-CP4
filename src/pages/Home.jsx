// import { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Intro from "../components/intro/intro";
import Card from "../components/cards/cards";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

function Home() {
    
    return(
        <>
            <header className="">
                <h1><Link to='/'>Kasa</Link></h1>
                <Navbar/>
            </header>

            <main>
                <Intro />
                <Card/>
            </main>

            <Footer/>
        </>
    )
}

export default Home