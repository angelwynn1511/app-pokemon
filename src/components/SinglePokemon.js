import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const urlPokemonInfos="https://pokeapi.co/api/v2/pokemon-species/";

const SinglePokemon = () => {
  const {pokemonId}= useParams();
  const [frenchName, setFrenchName]=useState("");
  const [englishName, setEnglishName]=useState("");
  const [shortDesc, setShortDesc]=useState("");
  const [longDesc, setLongDesc]=useState("");
  const [urlImg, setUrlImg]=useState("");

  useEffect(() => {
    fetch(`${urlPokemonInfos}${pokemonId}`)
    .then((response)=> response.json())
    .then((data) => {
      // console.log(data.names[4].name)
      setFrenchName(data.names[4].name)
      setEnglishName(data.names[8].name)
      setShortDesc(data.genera[3].genus)
      setLongDesc(data.flavor_text_entries[16].flavor_text)
      console.log(data.flavor_text_entries)
    })
  }, [])
// TODO: fonction pour trier les flavor_text_entries selon la langue (fr)

console.log(frenchName);
console.log(englishName);
  return (
    <div>
      <div>SinglePokemon</div>
      <p>{frenchName}</p>
      <p>{englishName}</p>
      <p>{shortDesc}</p>
      <p>{longDesc}</p>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`} alt={frenchName}></img>


    </div>
  )
}

export default SinglePokemon