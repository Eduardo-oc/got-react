import React, { useState, useEffect } from 'react'
import NavBar from '../../shared/utils/NavBar/NavBar'
import Footer from '../../shared/utils/Footer/Footer'
import ButtonBack from '../../shared/utils/ButtonBack/ButtonBack'
import axios from 'axios';
import ChronoGallery from './ChronoGallery/ChronoGallery';
import './Chrono.scss'

export default function ChronoPage() {

    const [data, setData] = useState([]);
    // const [age, setAge] = useState([]);

    // useEffect(() => {
    //     axios.get("https://api.got.show/api/show/characters/").then((res) => {
    //         setAge(res.data['age']);
    //         console.log(res.data[0]['age'].age);
    //     })
    // }, [])


    useEffect(() => {
        axios.get("https://api.got.show/api/show/characters/").then((res) => {
            setData(res.data);
            console.log(res.data);
        })
    }, [])

    return (
        <>
            <ButtonBack />
            <NavBar />
            <div>
                <ChronoGallery data={data} />

            </div>
            <Footer />
        </>
    )

}