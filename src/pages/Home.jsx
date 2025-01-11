import React from "react";

const Home = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary via-secondary to-primary h-[60vh] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Discover Amazing Products</h1>
          <p className="text-xl mb-6">
            Shop the best products at unbeatable prices.
          </p>
          <a
            href="/products"
            className="bg-accent text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-secondary transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Us?</h2>
        <p className="text-textSecondary">
          We offer high-quality products, fast delivery, and excellent customer support.
        </p>
      </div>
    </div>
  );
};

export default Home;
