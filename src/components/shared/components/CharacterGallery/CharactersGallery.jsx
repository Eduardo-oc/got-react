import React from "react";
import "./CharactersGallery.scss";

export default function CharacterGallery(props) {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-row flex-wrap justify-content-around">
        {props.character.map((item, index) => (
          <figure className="col-2">
            <a href={"./CharacterDetaills/" + item.name}>
              <img className="img-fluid" src={item.image} alt={item.name} />
            </a>
            <figcaption className="">{item.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
