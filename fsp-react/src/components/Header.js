import React from "react";
function Header() {
  return (
    <header>
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
        </nav>
      </menu>
      <div id="login">
        <p>
          <a>ورود</a>
        </p>
        <p>
          /
        </p>
        <p>
          <a>عضویت</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
