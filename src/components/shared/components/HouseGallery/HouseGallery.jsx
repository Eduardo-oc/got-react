import React from "react";
import { Link } from "react-router-dom";

export default function HouseGallery(props) {



  return (
    <div className="container-fluid">
    <div className="row">
      {props.houses.map((item, index) => 
        <div >
          <figure className='col-2'>
          <Link to={'./HouseDetaills/'+ item.name}>
            <img className="img" src={item.logoURL}></img>
            <p>{item.name}</p>
            </Link>
          </figure>
        </div>
      )}
      </div>
      </div>
  );
}
