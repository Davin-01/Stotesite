import React from "react";
// import products from "../data/products";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Product A", price: "Ksh10", image: "" },
  { id: 2, name: "Product B", price: "Ksh20", image: "" },
  { id: 3, name: "Product C", price: "Ksh30", image: "" },
];

// export default products;

const Products = () => {
  return (
    <div className="bg-background min-h-screen p-8">
      <h2 className="text-3xl font-bold text-primary text-center mb-6">
        Available Products
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
