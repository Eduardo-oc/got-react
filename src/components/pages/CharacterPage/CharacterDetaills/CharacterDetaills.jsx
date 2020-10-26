import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";

export default function CharacterDetaills() {
  const [character, setCharacter] = useState({});
  const [house, setHouse] = useState({});
  const param = useParams().character;

  useEffect(() => {
    axios
      .get(`https://api.got.show/api/show/characters/${param}`)
      .then((res) => {
        setCharacter(res.data);
        axios.get(`https://api.got.show/api/show/houses/${character.house}`).then((res) => {
          setHouse(res.data);
        });
      });
  }, []);

  console.log(character.allegiances);
  console.log(house);

  return (
    <div className="container-fluid">
      <div className="row">
        <figure className="col-1">
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
        </figure>
      </div>

      <div className="row">
        <div className="col-2">
          <h4>CASA/S</h4>
          <figure className="col-1">
            {/* <img src={house[0].logoURL} alt={character.house} />
            <p>{character.house}</p> */}
          </figure>
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
          <p>{character.father}</p>
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
    </div>
  );
}
