import React, { useEffect, useState } from "react";
import axios from "axios";
import HouseGallery from "../../shared/components/HouseGallery/HouseGallery";
import Footer from "../../shared/utils/Footer/Footer";
import NavBar from "../../shared/utils/NavBar/NavBar";
import Search from "../../shared/utils/Search/Search";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";
import ButtonBack from "../../shared/utils/ButtonBack/ButtonBack";

//let allHouses =[];
let allCharacters = [];

export default function HousePage() {
  const [houses, setHouses] = useState([]);

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

  useEffect(() => {
    axios.get("https://api.got.show/api/show/houses").then((res) => {
      setHouses(res.data);
      allCharacters = res.data;
    });
  }, []);

  useEffect(() => {
    axios.get("https://api.got.show/api/show/houses").then((res) => {
      console.log(res.data);
      setHouses(res.data);
    });
  }, []);

  return (
    <div>
      <div>
        <ButtonBack />
        <NavBar />
      </div>

      <Search fnFilterCharacters={filterCharacters} />

      <SimpleBar style={{ height: 700, width:2000, color: "white" }}>
      <HouseGallery houses={houses} />
      </SimpleBar>

      <Footer />
    </div>
  );
}
