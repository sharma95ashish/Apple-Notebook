import React,{useState}from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  console.log(`${process.env.REACT_APP_PORT_NO}api/auth/createUser`)
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const onChange = (e) => {
    console.log(e.target,"yoo")
    setCredentials({
      ...credentials,[e.target.name]:e.target.value
    });
    console.log(credentials);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_PORT_NO}api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const json = await response.json();
    console.log(json, "responseOfLoginApi");

    if (json.success) {
      //Set the Token and redirect to the Particular User's Notes 
      localStorage.setItem("token",json.authToken)
      // window.location="/"
      props.showAlert("Logged in Successfully","success")
      navigate('/')
    }
    else {
      props.showAlert("Invalid Credentials","danger")
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={credentials.email}
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
            type="text"
            value={credentials.password}
            onChange={onChange}
            className="form-control"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
