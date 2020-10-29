import React from "react";
import "./CharactersGallery.scss";

export default function CharacterGallery(props) {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-row flex-wrap justify-content-around">
        {props.character.map((item, index) => (
          <figure className="col-2 figure-gallery">
            <a href={"./CharacterDetaills/" + item.name}>
              <img className="img-fluid img-gallery" src={item.image} alt={item.name} />
            </a>
            <figcaption className="figcaption-gallery">{item.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
