// import { useState, useEffect } from "react";
import Header from "../components/header/header";
import Intro from "../components/intro/intro";
import Card from "../components/cards/cards";
import Footer from "../components/footer/footer";

function Home() {
    
    return(
        <>
            <Header/>

            <main>
                <Intro />
                <Card/>
            </main>

            <Footer/>
        </>
    )
}

export default Home