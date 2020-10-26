
import React, { useEffect, useState } from 'react';
import axios from "axios";
import HouseGallery from '../../shared/components/HouseGallery/HouseGallery';
import Footer from '../../shared/utils/Footer/Footer'
import NavBar from '../../shared/utils/NavBar/NavBar'
import ButtonBack from '../../shared/utils/ButtonBack/ButtonBack';
import './HousePage.scss'



export default function HousePage() {



    const [houses, setHouses] = useState([]);

    useEffect(() => {
        axios.get('https://api.got.show/api/show/houses').then(res => {
            console.log(res.data);
            setHouses(res.data);
        })
    }, [])


    return (
        <div className="first-div">
            <ButtonBack />
            <NavBar />
            <div className="second-div">

                <HouseGallery houses={houses} />

            </div>
            <Footer />
        </div>
    )

}

