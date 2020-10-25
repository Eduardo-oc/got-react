import React from 'react'
import NavBar from '../../shared/utils/NavBar/NavBar'
import Footer from '../../shared/utils/Footer/Footer'
// import "./homePage.scss"

export default function HomePage() {

    const imageName = require('../../../assets/img/trono_got.jpg')

    return (
        <div>


            <img className="img-home" src={imageName} alt="Tronaco"
            />
            <NavBar />

            <h1 className="h1-home">GAME OF</h1>
            <h1 className="h1-home">FRONTEND</h1>

            <Footer />
        </div>

    )

}