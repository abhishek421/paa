import Navbar from "./Components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Voting from "./Voting/App";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen h-full bg-slate-400">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="voting/*" element={<Voting />} />
        <Route
          path="*"
          element={
            <div className="flex flex-col h-screen w-screen justify-center items-center gap-4">
              <p className="text-2xl font-semibold">Page under construction</p>
              <Link to="/">
                <p className="cursor-pointer font-bold text-xl bg-white p-2 rounded-md">
                  GO Back
                </p>
              </Link>
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
