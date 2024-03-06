import React, { useState } from "react";
import foodData from '../data/foodData2.json';
import { useCart, useDispathCart } from "./ContextReducer";

const Card = () => {
  let data = useCart();
  let dispatch = useDispathCart();
  const [selectedItems, setSelectedItems] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [qty,setQty] = useState(1);
  const [size,setSize] = useState("");

  const handleAddToCart = async (item) => {
    const selectedItem = selectedItems[item.id];
    if (!selectedItem) {
      console.log("Selected item not found");
      return;
    }
  
    await dispatch({ type: "ADD", name: item.name, price: selectedItem.portion === "half" ? item.options[0].half : item.options[0].full, qty: selectedItem.quantity });
    console.log(data);
  }
  
  const handleChange = (itemId, quantity, portion) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [itemId]: { quantity, portion },
    }));
  };

  const getTotalPrice = (item) => {
    const selected = selectedItems[item.id];
    if (!selected) return 0;

    const price = selected.portion === "half" ? item.options[0].half : item.options[0].full;
    return price * selected.quantity;
  };
  console.log(cartItems,"cart");
  console.log(selectedItems,"selected");

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center m-3">
        {foodData.map((item) => (
          <div className="card m-2 mt-3" key={item.id} style={{ width: "18rem", maxWidth: "360px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px", display: "flex", flexDirection: "column" }}>
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
              <br></br>
              <div className="d-inline h-100 fs-5">Total Price: ₹{getTotalPrice(item)}</div>
              <hr></hr>
              <button className="btn btn-primary mt-3" onClick={() => handleAddToCart(item)} style={{ width: "100%" }}>
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
