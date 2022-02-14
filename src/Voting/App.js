import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Evm from "./Evm";

function App() {
  useEffect(() => {
    document.title = "Voting Portal | PCAS";
  }, []);

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="flex flex-col justify-center items-center grow h-full p-6">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/evm" element={<Evm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
