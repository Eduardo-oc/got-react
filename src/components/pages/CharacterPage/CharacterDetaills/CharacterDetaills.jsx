import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CharacterGallery from "../../../shared/components/CharacterGallery/CharactersGallery";

let characterDetailed = [];

export default function CharacterDetaills() {
  const [character, setCharacter] = useState(useParams().character);

  useEffect(() => {
    axios
      .get(`https://api.got.show/api/show/characters/${character}`)
      .then((res) => {
        setCharacter(res.data);
      });
  }, []);

  console.log(character.titles);

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
          <h4>CASA</h4>
          <p>{character.house}</p>
        </div>
        <div className="col-2">
          <h4>ALIANZAS</h4>
          <p>{character.allegiances}</p>
        </div>
        <div className="col-2">
          <h4>APARICIONES</h4>
          <p>{character.appearances}</p>
        </div>
        <div className="col-2">
          <h4>PADRE</h4>
          <p>{character.father}</p>
        </div>
        <div className="col-2">
          <h4>HERMANOS</h4>
          <p>{character.siblings}</p>
        </div>
        <div className="col-2">
          <h4>TÍTULOS</h4>
          {Array(character.titles).map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
