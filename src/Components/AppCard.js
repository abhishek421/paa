import React from "react";
import { Link } from "react-router-dom";

function AppCard({ logo, name, link }) {
  return (
    <Link to={`/${link}`}>
      <div className="flex flex-col hover:ring-4 ring-primary-100 gap-6 h-full justify-center rounded-lg items-center p-4 bg-white shadow-xl ">
        <img
          src={logo}
          className="object-contain h-full w-1/2 md:w-2/3"
          alt=""
        />
        <p className="text-md md:text-xl font-bold">{name}</p>
      </div>
    </Link>
  );
}

export default AppCard;
