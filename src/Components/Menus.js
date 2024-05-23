import React from "react";
import item1 from "../images/items.webp";
import item2 from "../images/items2.webp";
import item3 from "../images/items3.webp";
import item4 from "../images/items4.webp";
const Menus = () => {
  return (
    <div className="flex md:w-6/12 w-10/12 m-auto text-xs md:text-md justify-around my-2 content-center items-center">
      <div>
        <img src={item1}></img>
        <h1>Grocery</h1>
      </div>
      <div>
        <img src={item2}></img>
        <h1>Mobiles</h1>
      </div>
      <div>
        <img src={item3}></img>
        <h1>Fashion</h1>
      </div>
      <div>
        <img src={item4}></img>
        <h1>Grocery</h1>
      </div>
      <div>
        <img src={item2}></img>
        <h1>Grocery</h1>
      </div>
      <div>
        <img src={item3}></img>
        <h1>Grocery</h1>
      </div>
    </div>
  );
};

export default Menus;
