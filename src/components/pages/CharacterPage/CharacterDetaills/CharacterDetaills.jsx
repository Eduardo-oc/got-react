import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";
import ButtonBack from "../../../shared/utils/ButtonBack/ButtonBack";
import "./CharacterDetaills.scss";
import NavBar from "../../../shared/utils/NavBar/NavBar";
import Footer from "../../../shared/utils/Footer/Footer";

export default function CharacterDetaills() {
  const [character, setCharacter] = useState([]);
  const [house, setHouse] = useState([]);
  const param = useParams().character;

  useEffect(() => {
    axios
      .get(`https://api.got.show/api/show/characters/${param}`)
      .then((res) => {
        setCharacter(res.data);
        axios
          .get(`https://api.got.show/api/show/houses/${res.data.house}`)
          .then((res) => {
            setHouse(res.data[0]);
          });
      });
  }, []);

  console.log(house);
  // console.log(house.logoURL);

  return (
    <div className="container-fluid">
      <div>
        <ButtonBack />
        <NavBar />
      </div>
      <div className="d-flex flex-row justify-content-center text-center">
        <figure className="col-1">
          <img
            className=""
            src={character.image}
            alt={character.name}
          />
          <p className="">{character.name}</p>
        </figure>
      </div>

      <div className="row">
        <div className="col-2">
          <h4>CASA/S</h4>
          <SimpleBar style={{ maxHeight: 200, overflowX: "hidden" }}>
            <figure className="col-1">
              <img
                className="img-fluid"
                src={house ? house.logoURL:""}
                alt={house ? house.name:""}
              />
              <p>{character.house}</p>
            </figure>
          </SimpleBar>
        </div>

        <div className="col-2">
          <h4>ALIANZAS</h4>
          <SimpleBar style={{ maxHeight: 200 }}>
            {character &&
              character.allegiances &&
              character.allegiances.map((item) => {
                return <p>{item}</p>;
              })}
          </SimpleBar>
        </div>
        <div className="col-2">
          <h4>APARICIONES</h4>
          <SimpleBar style={{ maxHeight: 200 }}>
            {character &&
              character.appearances &&
              character.appearances.map((item) => {
                return <p>{item}</p>;
              })}
          </SimpleBar>
        </div>
        <div className="col-2">
          <h4>PADRE</h4>
          <SimpleBar style={{ maxHeight: 200 }}>
            <p>{character.father}</p>
          </SimpleBar>
        </div>
        <div className="col-2">
          <h4>HERMANOS</h4>
          <SimpleBar style={{ maxHeight: 200 }}>
            {character &&
              character.siblings &&
              character.siblings.map((item) => {
                return <p>{item}</p>;
              })}
          </SimpleBar>
        </div>
        <div className="col-2">
          <h4>TÍTULOS</h4>
          <SimpleBar style={{ maxHeight: 200 }}>
            {character &&
              character.titles &&
              character.titles.map((item) => {
                return <p>{item}</p>;
              })}
          </SimpleBar>
        </div>
      </div>
      <Footer />
    </div>
  );
}
