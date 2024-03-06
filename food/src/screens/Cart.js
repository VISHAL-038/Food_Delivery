import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../components/ContextReducer";

const Cart = () => {
  const cartItems = useCart();

  const removeFromCart = (itemId) => {
    // Implement logic to remove item from cart
  };

  const handleOrder = () => {
    // Display a confirmation message
    alert("Your order has been placed!");

    // Clear the cart (assuming setCart is a function provided by useCart)
    // setCart([]);

    // Alternatively, you can send the order data to a backend server for processing
    // Example code to send order data to a backend API
    // fetch("https://example.com/api/orders", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(cartItems),
    // })
    // .then(response => {
    //   // Handle the response from the server
    // })
    // .catch(error => {
    //   // Handle any errors that occur during the request
    // });
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-4 mb-3">Cart</h1>
      <div className="container">
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <ul className="list-group">
            {cartItems.map((cartItem) => (
              <li key={cartItem.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="mb-2">
                <span className="fw-bold">{cartItem.name}</span> - Quantity: {cartItem.qty} - Price: {cartItem.price}
              </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(cartItem.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={handleOrder}>Place Order</button>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Cart;
