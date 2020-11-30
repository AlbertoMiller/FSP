import React from "react";
function menu() {
  return (
    <menu>
      <nav>
        <ul>
          <li>
            <a href="#"> محصولات </a>
          </li>
          <li>
            <a href="#"> محصول سفارشی</a>
          </li>
          <li>
            <a href="#">راهنما</a>
          </li>
        </ul>
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
      </nav>
    </menu>
  );
}

export default menu;
