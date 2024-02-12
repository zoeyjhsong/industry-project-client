import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginValidation from "../LoginValidation/LoginValidation";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState({}); // State for validation errors

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const validationErrors = LoginValidation({ email: username, password });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setErrorMsg(""); // Reset error message

      // Proceed with login
      const reqBody = {
        username: username,
        password: password,
      };
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      })
        .then((response) => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error("Invalid credentials");
          }
        })
        .then((data) => {
          // Handle successful login
          console.log("Login successful");
          navigate("/"); // Navigate to home page
        })
        .catch((error) => {
          // Handle login error
          console.error("Login error:", error);
          setErrorMsg(error.message);
        });
    }
  };

  return (
    <>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="email"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <button id="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
      {errorMsg && <p>{errorMsg}</p>}
    </>
  );
};

export default Login;

// import React, { useState, useCallback } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import LoginValidation from "../LoginValidation/LoginValidation";
// import axios from "axios";

// function LogIn() {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleInputChange = useCallback(({ target: { name, value } }) => {
//     setCredentials((prev) => ({ ...prev, [name]: value }));
//   }, []);

//     const handleSubmit = useCallback(async (event) => {
//       event.preventDefault();
//       const validationErrors = LoginValidation(credentials);
//       setErrors(validationErrors);
//       if (Object.values(validationErrors).every(v => v === "")) {
//         try {
//           const response = await axios.post("http://localhost:3001/login", credentials);
//           console.log(response.data);
//           if (response.data.token) {
//             localStorage.setItem('token',response.data.token)
//             navigate("/home");
//           } else {
//             alert('Invalid Credentials');
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     }, [credentials, navigate]);

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded" style={{ width: "25%" }}>
//         {/* <form onSubmit={handleSubmit}> */}
//         <form>
//           {Object.entries(credentials).map(([key, _]) => (
//             <div key={key} className="mb-3">
//               <label htmlFor={key}>
//                 <strong>{key.charAt(0).toUpperCase() + key.slice(1)}</strong>
//               </label>
//               <input
//                 className="form-control"
//                 type={key === "password" ? "password" : "email"}
//                 placeholder={`Enter ${
//                   key.charAt(0).toUpperCase() + key.slice(1)
//                 }`}
//                 onChange={handleInputChange}
//                 id={key}
//                 name={key}
//                 required
//               />
//               {errors[key] && <p className="text-danger">{errors[key]}</p>}
//             </div>
//           ))}
//           <button type="submit" className="btn btn-success w-100">
//             Login
//           </button>
//           <Link
//             to="/signup"
//             className="btn btn-default border w-100 mt-2 text-decoration-none"
//           >
//             Create Account
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LogIn;
