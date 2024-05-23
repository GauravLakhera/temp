import React from "react";

const Card = ({ key, title, price, images }) => {
  console.log(key, title);
  return (
    <div className="flex flex-col m-5 w-52 p-2 border">
      <img className="w-80 h-52 object-cover " src={images[0]}></img>
      <h1>{title}</h1>
      <h1>{price} Rs</h1>
    </div>
  );
};

export default Card;
