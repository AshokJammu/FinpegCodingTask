import React from "react";
import { FiAlignLeft } from "react-icons/fi";
import { FaShoppingCart } from 'react-icons/fa';
const Home = () => (
    <div className="card">
    <div className="card-body">
      <nav className="navbar navbar-light bg-light">
          < FiAlignLeft style={{ fontSize: 35 }}/>
             <p style={{color:"black",fontSize: 35}}>Invest</p>
          <FaShoppingCart style={{ fontSize: 35 }}/>
      </nav>
    </div>
  </div>
);

export default Home;
