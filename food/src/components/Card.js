import React from "react";
import foodData from '../data/foodData2.json';

const Card = () => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center m-3">
            {foodData.map((item, index) => (
                <div className="card m-2 mt-3" style={{ width: "18rem", maxWidth: "360px" }} key={index}>
                    <img src={item.img} className="card-img-top" alt={item.name} style={{ width: "250px", height: "250px", objectFit: "cover" }}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <div className="container w-100">
                            <select className="m-2 -100 bg-success rounded">
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    );
                                })}
                            </select>

                            <select className="m-2 h-100 bg-success rounded">
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>

                            <div className="d-inline h-100 fs-5">Total Price</div>
                        </div>
                        <button className="btn btn-primary" onClick={() => (window.location.href = "#")}>
                            Go somewhere
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Card;
