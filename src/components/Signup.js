import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  console.log(`${process.env.REACT_APP_PORT_NO}api/auth/createUser`);
  const onChange = (e) => {
    console.log(e.target, "yoo");
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    console.log(credentials);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    console.log(name, email);
    const response = await fetch(
      `${process.env.REACT_APP_PORT_NO}api/auth/createUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );

    const json = await response.json();
    console.log(json, "responseOfLoginApi");

    if (json.success) {
      //Set the Token and redirect to the Particular User's Notes
      localStorage.setItem("token", json.authToken);
      // window.location="/"
      navigate("/");
      props.showAlert("Account created Successfully ","success")
    } else {
      props.showAlert("Invalid Credentials","danger")
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Name
          </label>
          <input
            type="text"
            // value={credentials.email}
            onChange={onChange}
            name="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            // value={credentials.email}
            onChange={onChange}
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            // value={credentials.password}
            onChange={onChange}
            className="form-control"
            id="password"
            minLength={5}
            required
            name="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            // value={credentials.password}
            onChange={onChange}
            className="form-control"
            id="cpassword"
            minLength={5}
            required
            name="cpassword"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    </div>
  );
}

export default Signup;
