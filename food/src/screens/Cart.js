import React, { useState } from "react";

const Cart = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const removeFromCart = (itemId) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1>Cart</h1>
      {selectedItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {selectedItems.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
