import React from 'react'



export default function ChronoGallery(props) {

    // const [characList, setCharacList] = useState();

    // const change = () => {
    //     setCharacList(characList.sort((a, b) => ((a.age?.age || 0) < (b.age?.age || 0)) ? 1 : -1))
    // }
    const characList = props.characters.sort((a, b) => ((a.age?.age || 0) < (b.age?.age || 0)) ? 1 : -1)
    return (  //Creamos const donde ordenamos de mayor a menos o sin datos de edad, y en los pipe le decimos con la ? que si no tiene el dato edad la edad sera 0. Luego asi abajo lo dejamos mas limpio y usamos solo la constante para poner todo ese codigo.

        <div class="timeline">
            {/* <div>
                <button onClick={change}>Cambiar</button>
            </div> */}
            {characList.map((character, i) => (
                <div class={`contain ${i % 2 === 0 ? 'left' : 'right'}`} >
                    <div class="content">
                        <p className="p-chrono">{character.age?.age || 'Edad desconocida'}</p>
                        <h3 className="h3-chrono">{character.name}</h3>
                        <figure>
                            <img className="img-chrono" src={character.image} alt="" />
                        </figure>
                    </div>
                </div>
            ))}
        </div>


    );
}