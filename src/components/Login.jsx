import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
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
      .post(`${process.env.REACT_APP_API}login`, formData)
      .then((res) => {
        alert("User Login Successful");
        navigate("/landingpage");
      })
      .catch((error) => {
        alert("Wrong Password!!");
        console.log(error.message);
      });
  };

  return (
    <div className="form-container">
      <h1 className="title-heading">User Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          className="input-field"
          placeholder="user email"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          id="password"
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
