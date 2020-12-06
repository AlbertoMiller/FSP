import React from "react";
import SearchBar from "./SearchBar";

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
          <li className="plzbecenter">
            <SearchBar />
          </li>
          <a href="#">
            <div className="centerShopIcon">
              <li className="ShopIcon ">
                <div className="circle"></div>
              </li>
            </div>
          </a>
        </ul>
      </nav>
    </menu>
  );
}

export default menu;
