// Import React, useState, Link, and useNavigate
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Define the Login component
const Login = () => {
  // Define state variables for email, password, error message, loading state, and navigate function
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Define a function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (!json.success) {
        setError(json.errors || "Invalid credentials");
      } else {
        setError("");
        localStorage.setItem("authtoken", json.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Define a function to handle input changes
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  // Return the JSX for the Login component
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/ingredients-cooking-herbs-spices-black-stone-table-top-view-food-background-above-109114366.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4">
          <h3 className="text-center mb-4">
            <Link to="/" className="text-decoration-none text-light">
              Login
            </Link>
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={credentials.email}
                onChange={onChange}
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={credentials.password}
                onChange={onChange}
                required
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Loading..." : "Submit"}
            </button>
            <Link to="/createuser" className="btn btn-danger ms-2">
              New User
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

// Export the Login component
export default Login;
