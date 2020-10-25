import React from "react";

export default function CharacterGallery(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        {props.character.map((item, index) => (
          <figure className="col-2">
            <a href={"./CharacterDetaills/"+item.name}>
              <p>{item.name}</p>
              <img src={item.image} alt={item.name}></img>
            </a>
          </figure>
        ))}
      </div>
    </div>
  );
}
