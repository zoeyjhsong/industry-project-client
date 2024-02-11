import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginValidation from "../LoginValidation/LoginValidation";
import axios from "axios";

function LogIn() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setCredentials((prev) => ({ ...prev, [name]: value }));
  }, []);

  //   const handleSubmit = useCallback(async (event) => {
  //     event.preventDefault();
  //     const validationErrors = LoginValidation(credentials);
  //     setErrors(validationErrors);
  //     if (Object.values(validationErrors).every(v => v === "")) {
  //       try {
  //         const response = await axios.post("http://localhost:3001/login", credentials);
  //         console.log(response.data);
  //         if (response.data.token) {
  //           localStorage.setItem('token',response.data.token)
  //           navigate("/home");
  //         } else {
  //           alert('Invalid Credentials');
  //         }
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   }, [credentials, navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded" style={{ width: "25%" }}>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          {Object.entries(credentials).map(([key, _]) => (
            <div key={key} className="mb-3">
              <label htmlFor={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}</strong>
              </label>
              <input
                className="form-control"
                type={key === "password" ? "password" : "email"}
                placeholder={`Enter ${
                  key.charAt(0).toUpperCase() + key.slice(1)
                }`}
                onChange={handleInputChange}
                id={key}
                name={key}
                required
              />
              {errors[key] && <p className="text-danger">{errors[key]}</p>}
            </div>
          ))}
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
          <Link
            to="/signup"
            className="btn btn-default border w-100 mt-2 text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
