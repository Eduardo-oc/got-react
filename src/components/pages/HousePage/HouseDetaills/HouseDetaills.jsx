import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function HouseDetaills() {
  const name = useParams().name;

  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.got.show/api/show/houses/:names" + name)
      .then((res) => {
        console.log(res.data.houses[0]);
        setHouses(houses);
      });
  }, []);

  return (
    <>
      <h1>Detail</h1>
      <div>
        <div>
          <figure>
            <img src={houses.logoURL} alt=""></img>
            <h1>{houses.name}</h1>
          </figure>
        </div>
        <div>
          <h4>LEMA</h4>
          <p>{houses.sigil}</p>
        </div>
        <div>
            <h4>SEDE</h4>
            <p>{houses.seat}</p>
        </div>
        <div>
            <h4>REGION</h4>
            <p>{houses.region}</p>
        </div>
        <div>
            <h4>ALIANZAS</h4>
            <p>{houses.allegiance}</p>
        </div>
        <div>
            <h4>REGIONES</h4>
            <p>{houses.region}</p>
        </div>
        <div>
            <h4>FUNDACION</h4>
            <p>{houses.createdAt}</p>
        </div>
      </div>
    </>
  );
}
