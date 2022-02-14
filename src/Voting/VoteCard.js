import React from "react";
import { Link } from "react-router-dom";

function VoteCard({ logo, name, id }) {
  return (
    <label className="group">
      <input type="radio" name="vote" value={id} className="hidden peer" />
      <div className="flex flex-col bg-white peer-checked:bg-primary-100 gap-6 h-full justify-center rounded-lg items-center p-4 shadow-xl">
        <img
          src={logo}
          className="object-contain h-full w-1/2 md:w-2/3"
          alt=""
        />
        <p className="text-md md:text-xl font-bold">{name}</p>
      </div>
    </label>
  );
}

export default VoteCard;
