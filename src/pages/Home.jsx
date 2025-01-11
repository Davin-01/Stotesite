import React from "react";

const Home = () => {
    return (
      <div className="bg-background min-h-screen p-8 text-center text-textPrimary">
        <h1 className="text-4xl font-bold text-primary">Welcome to Our Store</h1>
        <p className="mt-4 text-lg text-textSecondary">
          Browse our products and find what you need!
        </p>
        <a
          href="/products"
          className="mt-6 inline-block bg-accent text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-secondary transition duration-300"
        >
          View Products
        </a>
      </div>
    );
  };
  
  export default Home;
  