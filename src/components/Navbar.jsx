import React from "react";
 const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Precious Star</h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <a href="/" className="hover:text-accent transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="/products" className="hover:text-accent transition duration-300">
              Products
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
