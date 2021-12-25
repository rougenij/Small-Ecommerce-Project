import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header>
      <div className="leftside">
        <Link to="/">
          <Button btnName="Home Page" />
        </Link>
      </div>
      <div className="rightside">
        <Link to="/games">
          <Button btnName="Games Store" />
        </Link>
        <Link to="/shoppingcart">
          <Button btnName="Shopping Cart" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
