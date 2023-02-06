import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
const url = "https://pokeapi.co/api/v2/pokemon/";
const urlFrenchNames = "https://pokeapi.co/api/v2/pokemon-species/"
const urlImg =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const PokemonsList = ({ pokemons, id }) => {
    const [name, setName] = useState("");

    const getName = async () =>{
        const response = await fetch(`${url}${id}`);
        const {result} = await response.json();
        setName(result)
    }

    useEffect(()=>{
        getName()
    }, [])

  return (
    <div className="pokemons">
      {pokemons.map((pokemon, i) => {
        const { name } = pokemon;
        return (
          <article key={name}>
            <p>{name.toUpperCase()}</p>
            {i <= 897 ? (
              <img src={`${urlImg}${i + 1}.png`} alt={` of ${name}`} />
            ) : (
              <img src={`${urlImg}${i + 9103}.png`} alt="" />
            )}

            <Link to={`/pokemons/${i+1}`}>DETAILS</Link>
          </article>
        );
      })}
    </div>
  );
};

export default PokemonsList;
