// Cart component (updated)
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../components/ContextReducer";

const Cart = () => {
  const cartItems = useCart();

  const removeFromCart = (itemId) => {
    // Implement logic to remove item from cart
  };

  return (
    <div>
      <Navbar />
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.name} - Quantity: {cartItem.quantity}
              <button onClick={() => removeFromCart(cartItem.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
