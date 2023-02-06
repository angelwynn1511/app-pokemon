import React, {useState,useEffect} from 'react';
import SearchBar from '../components/SearchBar';
import PokemonsList from '../components/PokemonsList';



const url = "https://pokeapi.co/api/v2/pokemon/";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(true);

const getPokemons = async () =>{
    const response = await fetch(`${url}${input}`);
    const { results } = await response.json();
    console.log(response);
    setPokemons(results)

}
useEffect(()=>{
    getPokemons();
}, [input])

  return (
    <div className="container">
      <SearchBar setInput={(input, setInput)} />
      <h1>Pokemons</h1>
      <div className="listPokemons">
        {pokemons.length <= 0 ? (
          <p>Aucun résultat ne correspond à votre recherche</p>
        ) : (
          <PokemonsList pokemons={pokemons}/>
        )}
      </div>

    </div>  )
}

export default Home