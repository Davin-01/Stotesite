import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";

const App = () => {
  return (
    <Router>
      <div className="bg-background min-h-screen text-textPrimary">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white text-center py-4 mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Small Store. All Rights Reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
