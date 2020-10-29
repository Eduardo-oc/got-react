import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./HouseDetails.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";

export default function HouseDetaills() {
  const [houseName, setHouseName] = useState(useParams().name);

  useEffect(() => {
    axios
      .get(`https://api.got.show/api/show/houses/${houseName}`)
      .then((res) => {
        setHouseName(res.data);
      });
  }, []);

  console.log(houseName);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <figure className="col-2">
            <img src={houseName[0].logoURL} alt=""></img>
            <h1>{houseName[0].name}</h1>
          </figure>
        </div>

        <div className="row container">
          <div className="col-2 posicion">
            <h4>LEMA</h4>
            <p>{houseName[0].sigil}</p>
          </div>

          <div className="col-2 posicion">
            <h4>SEDE</h4>
            <SimpleBar style={{ maxHeight: 200 }}>
              {houseName &&
                houseName[0].seat &&
                houseName[0].seat.map((item) => {
                  return <p>{item}</p>;
                })}
            </SimpleBar>
            {/* <p>{houseName[0].seat}</p>*/}
          </div>

          <div className="col-2 posicion">
            <h4>REGION</h4>
            <SimpleBar style={{ maxHeight: 200 }}>
              {houseName &&
                houseName[0].region &&
                houseName[0].region.map((item) => {
                  return <p>{item}</p>;
                })}
            </SimpleBar>

            {/* <p>{houseName[0].region}</p>*/}
          </div>

          <div className="col-2 posicion">
            <h4>ALIANZAS</h4>
            <SimpleBar style={{ maxHeight: 200 }}>
              {houseName &&
                houseName[0].allegiance &&
                houseName[0].allegiance.map((item) => {
                  return <p>{item}</p>;
                })}
            </SimpleBar>
            {/*<p>{houseName[0].allegiance}</p>*/}
          </div>

          <div className="col-2 posicion">
            <h4>RELIGIONES  </h4>
            <SimpleBar style={{ maxHeight: 200 }}>
              {houseName &&
                houseName[0].religion &&
                houseName[0].religion.map((item) => {
                  return <p>{item}</p>;
                })}
            </SimpleBar>
          </div>

          <div className="col-2 posicion">
            <h4> FUNDACION</h4>
            <p>{houseName[0].createdAt}</p>
          </div>
          
        </div>
      </div>
    </>
  );
}
