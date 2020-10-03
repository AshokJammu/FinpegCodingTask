import React from "react";
import { FiSearch } from "react-icons/fi";
 const Search = () => (
  <div className="card">
    <div className="card-body">
      <nav className="navbar navbar-light bg-light">
        <small style={{ fontSize: 25 }}>All funds <span style={{ fontSize: 10 }}>V</span></small>
        <small style={{ fontSize: 25 }}>Screener</small>
        <small style={{ fontSize: 25 }}>Filter by AMC</small>
        <div style={{ background: " #5095fc",fontSize: 50,width:200, textAlign:"center"}}>
        <FiSearch />
        </div>
         
       </nav>
    </div>
  </div>
);

export default Search;
