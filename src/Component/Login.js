import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const LoginForm = () => {
  const [database, setDatabase] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = document.forms[0];
    const userData = database.find((user) => user.email === email.value);
    if (userData) {
      if (userData.password !== password.value) {
        alert("Invalid password");
      } else {
        localStorage.setItem("name", JSON.stringify(userData.name));
        localStorage.setItem("id", JSON.stringify(userData.id));
        handleClick();
      }
    } else {
      alert("email not found");
    }
    console.log(password, email);
    if (!email.value || !password.value) {
      alert("Fill the empty input fields");
      return false;
    }
  };
  useEffect(() => {
    let localData = localStorage.getItem("name");
    console.log("Data :: ", localData);
    fetch("http://localhost:3001/users")
      .then((resp) => resp.json())
      .then((info) => setDatabase(info));
  }, []);
  return (
    <div className="form mt-3">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-body">
          <div className="email">
            <label className="form__label" for="email">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password{" "}
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="footer">
          <button type="submit" class="btn btn-success">
            Log in
          </button>
          <p>
            <Link to="/signup">Signup Here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;