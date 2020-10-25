
import React, { useEffect, useState } from 'react';
import axios from "axios";
import HouseGallery from '../../shared/components/HouseGallery/HouseGallery';
import Footer from '../../shared/utils/Footer/Footer'
import NavBar from '../../shared/utils/NavBar/NavBar'



export default function HousePage() {


  
    const[ houses , setHouses] = useState([]);

useEffect(()=>{
    axios.get('https://api.got.show/api/show/houses').then(res =>{
        console.log(res.data);
        setHouses(res.data);
    })
}, [])


return(
    <div>
     <NavBar />
    <HouseGallery houses = {houses} />
     <Footer />
     </div>
)

}

