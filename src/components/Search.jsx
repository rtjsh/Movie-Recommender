import React from "react";

const Search = ({ SearchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="images/Search.png" alt="" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={SearchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
