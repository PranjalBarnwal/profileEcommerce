import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
import { ShoppingCart, Heart } from "./../assets/icons";
import DarkModeToggler from "./DarkModeToggler";

const Navbar = () => {
  const cartItemCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
      Luxee
      </Link>
      <div className="flex space-x-4 items-center">
        <Link
          to="/cart"
          className="relative flex items-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold  p-2 rounded"
        >
          <ShoppingCart />

          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full">
            {cartItemCount}
          </span>
        </Link>
        <Link
          to="/wishlist"
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
        >
          <Heart />
        </Link>
        <DarkModeToggler />
        <button className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
