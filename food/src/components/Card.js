import React, { useState } from "react";
import foodData from '../data/foodData2.json';

const Card = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const handleChange = (itemId, quantity, portion) => {
    setSelectedItems({ ...selectedItems, [itemId]: { quantity, portion } });
  };

  const addToCart = (item) => {
    const selected = selectedItems[item.id];
    if (!selected) return;

    const newItem = {
      id: item.id,
      name: item.name,
      quantity: selected.quantity,
      portion: selected.portion,
      price: selected.portion === "half" ? item.options[0].half : item.options[0].full,
    };

    setCartItems([...cartItems, newItem]);
  };

  const getTotalPrice = (item) => {
    const selected = selectedItems[item.id];
    if (!selected) return 0;

    const price = selected.portion === "half" ? item.options[0].half : item.options[0].full;
    return price * selected.quantity;
  };

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center m-3">
        {foodData.map((item) => (
          <div className="card m-2 mt-3" style={{ width: "18rem", maxWidth: "360px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px", display: "flex", flexDirection: "column" }} key={item.id}>
            <img src={item.img} className="card-img-top" alt={item.name} style={{ flex: "none", height: "250px", objectFit: "cover", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <div className="d-flex align-items-center">
                <div className="me-2">
                  <label htmlFor={`quantity-${item.id}`} className="visually-hidden">Quantity</label>
                  <select id={`quantity-${item.id}`} className="form-select" aria-label="Select Quantity" style={{ borderRadius: "5px", backgroundColor: "#28a745", color: "#fff", padding: "5px 10px", width: "80px" }} onChange={(e) => handleChange(item.id, parseInt(e.target.value), selectedItems[item.id]?.portion || "half")}>
                    {Array.from(Array(6), (e, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor={`portion-${item.id}`} className="visually-hidden">Portion</label>
                  <select id={`portion-${item.id}`} className="form-select" aria-label="Select Portion" style={{ borderRadius: "5px", backgroundColor: "#28a745", color: "#fff", padding: "5px 10px", width: "100px" }} onChange={(e) => handleChange(item.id, selectedItems[item.id]?.quantity || 1, e.target.value)}>
                    <option value="half">Half - ₹{item.options[0].half}</option>
                    <option value="full">Full - ₹{item.options[0].full}</option>
                  </select>
                </div>
              </div>
              <div className="d-inline h-100 fs-5">Total Price: ₹{getTotalPrice(item)}</div>
              <button className="btn btn-primary mt-3" onClick={() => addToCart(item)} style={{ width: "100%" }}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
