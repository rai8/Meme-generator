import React from "react";
import Trollface from "../images/Trollface.png";
import "../styles/style.css";

function Header() {
  return (
    <div>
      <header>
        <img src={Trollface} alt="Trollface" />
      </header>
    </div>
  );
}
export default Header;
