import React from "react";

const Navbar = () => {
    return (
      <nav className="bg-primary text-white p-4 shadow">
        <ul className="flex justify-around text-lg">
          <li>
            <a href="/" className="hover:text-accent transition duration-300">Home</a>
          </li>
          <li>
            <a href="/products" className="hover:text-accent transition duration-300">Products</a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  