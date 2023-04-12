import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API}register`, formData)
      .then((res) => {
        alert("User Registered");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="form-container">
      <h1 className="title-heading">User Register</h1>
      <form action="" onSubmit={handleSubmit} className="form">
        <input
          type="text"
          id="fullName"
          required
          className="input-field"
          placeholder="user full name"
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          id="email"
          required
          className="input-field"
          placeholder="user email"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          id="password"
          required
          className="input-field"
          placeholder="user password"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value={"Submit"} className="submit-btn" />
      </form>
    </div>
  );
};
