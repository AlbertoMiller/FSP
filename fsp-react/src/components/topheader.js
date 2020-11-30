import React from "react";
import logo from "../UI-UX/Icons/logo/final-logo-fsp3.png";
function topheader() {
  return (
    <div className="top-header">
      <a href="#">
        <img
          className="flex logo"
          src={logo}
          alt="Art Word"
          width="122"
          height="80"
        />
      </a>
      <div id="login">
        <div id="login-singin">
          <p>
            <a href="#">ورود</a>
          </p>
          <p>/</p>
          <p>
            <a href="#">عضویت</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default topheader;
