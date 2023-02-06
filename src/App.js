import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SinglePokemon from "./components/SinglePokemon";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            {/* J'insère dans ma route Home mes routes About et error */}
            {/* Une route pour la page About, qui affichera le composant About */}
            <Route path="about" element={<About />} />
            {/* :pokemonId est un paramètre , cela permettra de créer le chemin vers un id spécifique*/}
            <Route path="/pokemons/:pokemonId" element={<SinglePokemon />} />
          </Route>
          {/* Tous les liens qui ne seront pas ceux du dessus enclencheront une erreur */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
