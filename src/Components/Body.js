import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import c1 from "../images/c1.webp";
import c2 from "../images/c2.webp";
import c3 from "../images/c3.webp";
import axios from "axios";
import Card from "./Card";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Carousel autoPlay interval={2000} infiniteLoop>
        <div>
          <img src={c1}></img>
        </div>
        <div>
          <img src={c2}></img>
        </div>
        <div>
          <img src={c3}></img>
        </div>
        <div>
          <img src={c2}></img>
        </div>
        <div>
          <img src={c1}></img>
        </div>
      </Carousel>
      <div>
        <h1 className="font-semibold text-xl">Best of Electronic </h1>
        <div
          className="flex overflow-x-scroll"
          style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}
        >
          <div className="flex">
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                price={product.price}
                images={product.images}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-xl">Beauty,food, toys and more </h1>
        <div className="flex overflow-x-scroll" style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
          <div className="flex">
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                price={product.price}
                images={product.images}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
