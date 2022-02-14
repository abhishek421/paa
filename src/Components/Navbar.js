import React from "react";
import logo from "../Assets/logo.png";

function Navbar() {
  return (
    <div className="flex flex-row items-center justify-center p-10 bg-white shadow-lg h-10">
      <img className="object-contain h-10" src={logo} alt="PCAS Logo" />
    </div>
  );
}

export default Navbar;
