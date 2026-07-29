import { useState } from 'react';
import Navbar from '../navbar/navbar';

function CollapseNavbar () {
    const [isVisible, setVisible]= useState(null)

    const MenuDisplay = () => {
        setVisible(!isVisible)
    }

    return(
        <>
            <button onClick={MenuDisplay} className={setVisible? isVisible : ''}><i className="fa-solid fa-bars" ></i></button>
            <div>
                {isVisible && <Navbar/>}
            </div>
        </>
    )
}
export default CollapseNavbar