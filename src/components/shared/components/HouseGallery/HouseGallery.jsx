import React from "react";
import { Link } from "react-router-dom";

export default function HouseGallery(props) {



  return (
    <div className="row">
  
      {props.houses.map((item, index) => 

        <div className="col-2">
          <figure >
          <Link to={'houses/' + item.name}>
            <img className='img' src={item.logoURL}></img>
            <p>{item.name}</p>
            </Link>
          </figure>
        </div>
        
      )}
      </div>
  );
}
