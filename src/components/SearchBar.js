import React from "react";

const SearchBar = ({ input, setInput }) => {
  return (
    <section className="searchform">
      <form action="/" method="get">
        <label htmlFor="header-search">
          <h2>Search a Pokemon</h2>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Catch them all"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchBar;
