import React from "react";
import { Link, useNavigate   } from "react-router-dom";
import { useState } from "react";
const SignupForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "email") {
      setEmail(value);
    }
  };
  // navigation to other page
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Home')};
  const handleSubmit = () => {
    console.log(name);
    if(!name ) { alert('Fill the empty input fields');  return false}; 
    const user = {
        name : name,
        email : email,
        password : password,
    }
localStorage.setItem('name', JSON.stringify(user.name));
    fetch('http://localhost:3001/users',{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)
    }).then(resp => resp.json()).then(info => handleClick() );
  };
  return (
    <div className="form mt-3">
      <h2 className="text-center">Signup Form</h2>
      <div className="form-body">
        <div className="username">
          <label className="form__label">First Name </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => handleInputChange(e)}
            placeholder="First Name"
          />
        </div>
        <div className="email">
          <label className="form__label">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label">Password </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
      </div>
      <div class="footer">
        <button
          onClick={() => handleSubmit()}
          type="submit"
          class="btn  btn-success"
        >
          Register
        </button>
        <p>
          {" "}
          <Link to="/login">Login here</Link>{" "}
        </p>
      </div>
    </div>
  );
};





























export default SignupForm;