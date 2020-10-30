import React from "react";
import { Link } from "react-router-dom";
//import './HouseGallery.scss'; 
export default function HouseGallery(props) {



  return (
    <div className="container-fluid">
    <div className="d-flex flex-row flex-wrap justify-content-around">
      {props.houses.map((item, index) => 
        <div className="img" >
          <figure className='col-2 size'>
          <Link to={'./HouseDetaills/'+ item.name}>
            <img src={item.logoURL ? item.logoURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/A_Song_of_Ice_and_Fire_arms_of_House_Lannister_red_scroll.png/220px-A_Song_of_Ice_and_Fire_arms_of_House_Lannister_red_scroll.png'}></img>
            <p>{item.name}</p>
            </Link>
          </figure>
        </div>
      )}
      </div>
      </div>
  );
}
