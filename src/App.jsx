import React from "react";
import {  Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import WishlistPage from "./components/WishlistPage";


const App = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
        <Navbar />
        <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
        <Footer />
      </div>
  );
};

export default App;
