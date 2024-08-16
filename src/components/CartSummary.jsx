import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../slices/cartSlice';

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0); 

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedAmount = totalAmount * (1 - discount / 100);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleApplyCoupon = () => {
   
    if (couponCode === 'DISCOUNT10') {
      setDiscount(10); 
    } else {
      setDiscount(0);
      alert('Invalid coupon code');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      <div className="flex justify-between text-gray-900 dark:text-white">
        <span>Total Items:</span>
        <span>{cartItems.length}</span>
      </div>
      <div className="flex justify-between text-gray-900 dark:text-white mt-2">
        <span>Total Amount:</span>
        <span>₹{totalAmount.toFixed(2)}</span>
      </div>
      {discount > 0 && (
        <div className="flex justify-between text-gray-900 dark:text-white mt-2">
          <span>Discount ({discount}%):</span>
          <span>₹{(totalAmount * discount / 100).toFixed(2)}</span>
        </div>
      )}
      <div className="flex justify-between text-gray-900 dark:text-white mt-2">
        <span>Amount After Discount:</span>
        <span>₹{discountedAmount.toFixed(2)}</span>
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
          className="border border-gray-300 dark:border-gray-700 dark:text-black rounded-lg px-3 py-2 w-full"
        />
        <button
          onClick={handleApplyCoupon}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-2"
        >
          Apply Coupon
        </button>
      </div>
      {cartItems.length > 0 && (
        <button
          onClick={handleClearCart}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-4"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default CartSummary;
