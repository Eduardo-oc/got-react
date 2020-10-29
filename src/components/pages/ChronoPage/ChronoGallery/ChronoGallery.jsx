import React from 'react'



export default function ChronoGallery(props) {


    return (
        <div>


            {props.data.map((data, index) => (
                <div>
                    <h3>{data.age && data["age"].age}</h3>
                    <h3>{data.name}</h3>
                    <img src={data.image} alt="" />

                </div>

            ))}

        </div>

    );
}