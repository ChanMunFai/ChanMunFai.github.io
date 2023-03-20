import React, { useState } from 'react';
import SearchList from './SearchList';
import "./Search.css";

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  // filter cards whose titles and summary are within search input 

  const filteredPosts = details
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // sort by date
    .filter(
      post => {
        return (
          post
          .title
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
          post
          .description
          .toLowerCase()
          .includes(searchField.toLowerCase())
        );
      }
    );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <SearchList filteredCards={filteredPosts} />
    );
  }

  return (
    <div>
      <div className='search-bar-container'>
        <input 
          className="search-bar"
          type = "search" 
          placeholder = "Search blog articles" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </div>
  );
}

export default Search;
