
import React, { useEffect, useState } from 'react';
import axios from "axios";
import HouseGallery from '../../shared/components/HouseGallery/HouseGallery';
import Footer from '../../shared/utils/Footer/Footer'
import NavBar from '../../shared/utils/NavBar/NavBar'
import Search from '../../shared/utils/Search/Search';
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";



//let allHouses =[];
let allCharacters =[];

export default function HousePage() {
const[ houses , setHouses] = useState([]);


// const filterHouses = (data) => {
//     const filteredHouses = allHouses.filter((houses) =>
//       houses.name.toLowerCase().includes(data.name.toLowerCase())
//     );
//     setHouses(filteredHouses);
// };



const filterCharacters = (data) => {
    const filteredCharacters = allCharacters.filter((houses) =>
      houses.name.toLowerCase().includes(data.name.toLowerCase())
    );
    setHouses(filteredCharacters);
    
  };


useEffect(()=>{
    axios.get('https://api.got.show/api/show/houses').then(res =>{
        setHouses(res.data);
        allCharacters= res.data;
    })
}, [])







return(
    <div >
    
     <NavBar />
    
     <Search fnFilterCharacters={filterCharacters} />

    {/* <SimpleBar style={{ maxHeight: 1000,  maxwidth: 700}}>*/}
    <HouseGallery houses = {houses } />
 { /*  </SimpleBar>*/}


     <Footer />
     </div>
);

}
