import React from "react";
import logo from "../Assets/voting.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-white rounded-md shadow-lg flex flex-col items-center p-10 gap-4 grow h-full">
      <img src={logo} alt="Job Portal Logo" className="w-1/2" />
      <input
        pattern="[A-Z]{3}[0-9]{4}[A-Z]{2}[0-9]{3}"
        className="p-2 w-full ring-2 ring-slate-500 rounded-md focus:ring-2 focus:ring-primary-100 invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-red-500 font-semibold valid:focus:ring-green-500 border-none focus:outline-none"
        type="text"
        placeholder="Enter your Voter ID"
      />
      <Link to="/voting/evm" className="w-full">
        <button className="bg-slate-500 text-white w-full hover:bg-primary-100 font-bold text-xl p-2 rounded-lg">
          Proceed to Vote
        </button>
      </Link>
    </div>
  );
}

export default Login;
