import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import FundsData from "./components/FundsData";
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div>
        <Search />
      </div>
      <div>
        <FundsData />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
