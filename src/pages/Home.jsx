import Navbar from "../components/navbar/navbar"
import Intro from "../components/intro/intro"
import Footer from "../components/footer/footer"

function Home() {
    return(
        <>
            <header className="">
                <h1>Kasa</h1>
                <Navbar/>
            </header>

            <main>
                <Intro />
            </main>

            <Footer/>
        </>
    )
}

export default Home