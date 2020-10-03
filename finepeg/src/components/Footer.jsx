import React from "react";
import { AiFillHome } from "react-icons/ai";
import { CgProfile} from "react-icons/cg";
import { BiShoppingBag} from "react-icons/bi";
import { HiCurrencyRupee} from "react-icons/hi";


const Footer = () => (
  <div class="card">
    <div class="card-body">
      <nav class="navbar navbar-light bg-light">
        <div>
          <AiFillHome style={{ fontSize: 35 }}/>
          <div style={{ fontSize: 15 }}>HOME</div>
        </div>
        <div>
          <HiCurrencyRupee style={{ fontSize: 35 }}/>
          <div style={{ fontSize: 15 }}>Invest</div>
        </div>
        <div>
          <BiShoppingBag style={{ fontSize: 35 }}/>
          <div style={{ fontSize: 15 }}>Portfolio</div>
        </div>
        <div>
          <CgProfile style={{ fontSize: 35 }}/>
          <div style={{ fontSize: 15 }}>Profile</div>
        </div>
      </nav>
    </div>
  </div>
);

export default Footer;
