import React from "react";


const ProductCard = ({ product }) => {
    return (
      <div className="bg-white border border-secondary rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md"
        />
        <h3 className="text-xl font-bold text-primary mt-3">{product.name}</h3>
        <p className="text-lg text-secondary">{product.price}</p>
        <button className="mt-4 bg-accent text-white px-4 py-2 rounded hover:bg-secondary transition duration-300">
          Buy Now
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  