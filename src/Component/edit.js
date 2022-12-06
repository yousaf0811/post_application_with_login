import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem("id"));

    fetch(`http://localhost:3001/users/${userId}`)
      .then((resp) => resp.json())
      .then((info) => {
        setUserDetail(info);
        setName(info.name);
        setEmail(info.email);
        setPassword(info.password);
        setGender(info.gender);
        setDOB(info.DOB);
      });
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "name") {
      setName(value);
    }

    if (id === "email") {
      setEmail(value);
    }
    if (id === "DOB") {
      setDOB(value);
    }
  };
  // navigation to other page.
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Home");
  };

  const handleSubmit = () => {
    console.log(name, email, DOB);

    if (!name || !email || !DOB) {
      alert("Fill the empty input fields");
      return false;
    }

    const user = {
      name: name,
      email: email,
      password : password,
      DOB : DOB,
      gender: gender,
      id: userDetail.id,
    };

    localStorage.setItem("name",JSON.stringify(user.name));

    fetch(`http://localhost:3001/users/${userDetail.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((info) => handleClick());
  };
  console.log(userDetail.name);
  return (
    <div className="form mt-3">
      <h2 className="text-center">Edit Form</h2>

      <div className="form-body">
        <div className="username">
          <label className="form__label"> Name </label>

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
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Email"
          />
        </div>

        <div className="dob">
          <label className="form__label">Date of Birth </label>
          <input
            className="form-control"
            type="date"
            id="DOB"
            name="DOB"
            placeholder=""
            value={DOB}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <div class="footer">
        <button
          onClick={() => handleSubmit()}
          type="submit"
          class="btn  btn-success"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Edit;
