import React from "react";
import VoteCard from "./VoteCard";

function Evm() {
  return (
    <form className="grid grid-cols-2 md:grid-cols-6 items-stretch gap-6">
      <VoteCard
        id="asfdsf"
        name="BJP"
        logo="https://www.kindpng.com/picc/m/247-2478665_bjp-logo-png-photo-bharatiya-janata-party-transparent.png"
      />
      <VoteCard
        id="asfw345"
        name="AAP"
        logo="https://www.kindpng.com/picc/m/109-1092726_aam-aadmi-party-logo-png-transparent-png.png"
      />
      <VoteCard
        id="32erdsf"
        name="Congress"
        logo="https://i.dlpng.com/static/png/6577643_preview.png"
      />
      <button
        type="submit"
        className="bg-slate-500 text-white fixed z-50 bottom-10 left-1/4 w-1/2 hover:bg-primary-100 font-bold text-xl p-2 rounded-lg"
      >
        Vote
      </button>
    </form>
  );
}

export default Evm;
