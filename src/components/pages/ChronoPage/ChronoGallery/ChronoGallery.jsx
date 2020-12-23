import React, { useState } from 'react'
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";



export default function ChronoGallery(props) {

    const [changeList, setChangeList] = useState(true);
    //Como sort es una funcion que modifica el array original, usamos los ... para crear un nuevo array y asi no peta.
    const characListUp = [...props.characters].sort((a, b) => ((a.age?.age || 0) < (b.age?.age || 0)) ? 1 : -1);

    const characListDown = [...props.characters].sort((a, b) => ((a.age?.age || 0) > (b.age?.age || 0)) ? 1 : -1);
    return (  //Creamos const donde ordenamos de mayor a menos o sin datos de edad, y en los pipe le decimos con la ? que si no tiene el dato edad la edad sera 0. Luego asi abajo lo dejamos mas limpio y usamos solo la constante para poner todo ese codigo.

        <div class="timeline">
            <div>
                <button className="btn-chrono btn-h " onClick={() => setChangeList(true)}> <span> ⬆ </span>  </button>
                <button className="btn-chrono btn-margin" onClick={() => setChangeList(false)}> <span> ⬇ </span>  </button>
            </div>
            <SimpleBar style={{ height: 700, width: 600, color: "white" }}>
                <div>
                    {changeList === true && characListUp.map((character, i) => (
                        <div class={`contain ${i % 2 === 0 ? 'left' : 'right'}`} >
                            <div class="content">
                                <p className="p-chrono">{character.age?.age || 'Edad desconocida'}</p>
                                <h3 className="h3-chrono">{character.name}</h3>
                                <figure >
                                    <img className="img-chrono" src={character.image} alt="" />
                                </figure>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    {changeList === false && characListDown.map((character, i) => (
                        <div class={`contain ${i % 2 === 0 ? 'left' : 'right'}`} >
                            <div class="content">
                                <p className="p-chrono">{character.age?.age || 'Edad desconocida'}</p>
                                <h3 className="h3-chrono">{character.name}</h3>
                                <figure >
                                    <img className="img-chrono" src={character.image} alt="" />
                                </figure>
                            </div>
                        </div>
                    ))}
                </div>
            </SimpleBar>
        </div >


    );
}