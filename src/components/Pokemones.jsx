import React, { useState } from 'react'
import usePokemon from '../hooks/usePokemon';
import Select from 'react-select';

const Pokemones = () => {

    const [actual, setActual] = useState('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    const { pokemones, loading } = usePokemon(actual)

    let options = [];
    pokemones.map(function (pokemon) {


        options.push({ value: pokemon.name, label: pokemon.name })
    })


    console.log(options);
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Escoja el pokemón</h5>
                <img src="" alt="" />
                <div class="dropdown show">

                    <Select options={options} />
                    { }
                </div>

            </div>

          
            
        </div>
      

      

    )
}

export default Pokemones

