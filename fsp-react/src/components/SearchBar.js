import React from "react";

function SearchBar() {
 return(

     <div>
    <div id="searchbar">
      <div class="searchBox">
        <input
          class="searchInput"
          type="text"
          name="SearchBar"
          placeholder="بنویس تا بگردم..."
          />
        <button class="searchButton" href="#">
          <i class="material-icons">search</i>
        </button>
      </div>
    </div>
  </div>
          )   
         }

export default SearchBar;
