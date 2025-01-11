import React from "react";
// import products from "../data/products";


const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-secondary rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-xl font-bold text-primary">{product.name}</h3>
        <p className="text-textSecondary">{product.price}</p>
        <p className="text-sm text-gray-500 mt-2">{product.description}</p>
        <button className="mt-4 bg-accent text-white px-4 py-2 rounded hover:bg-secondary transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
