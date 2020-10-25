import axios from "axios";
import React, { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import CharacterGallery from "../../shared/components/CharacterGallery/CharactersGallery";
import Search from "../../shared/utils/Search/Search";

let allCharacters = [];

export default function CharacterPage() {
  const [character, setCharacter] = useState([]);

  const filterCharacters = (data) => {
    const filteredCharacters = allCharacters.filter((character) =>
      character.name.toLowerCase().includes(data.name.toLowerCase())
    );
    setCharacter(filteredCharacters);
  };

  useEffect(() => {
    axios.get("https://api.got.show/api/show/characters").then((res) => {
      allCharacters = res.data;
      setCharacter(res.data);
    });
  }, []);

  return (
    <div>
      <Search fnFilterCharacters={filterCharacters} />
        <CharacterGallery character={character} />
    </div>
  );
}
