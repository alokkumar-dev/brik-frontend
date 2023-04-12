import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
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
      .post(`${process.env.REACT_APP_API}post`, formData)
      .then((res) => {
        alert("Post Created");
        navigate("/landingpage");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="form-container">
      <h1 className="title-heading">User Create Post</h1>
      <form action="" onSubmit={handleSubmit} className="form">
        <input
          type="text"
          id="title"
          required
          className="post-title"
          placeholder="Post Title"
          onChange={handleChange}
        />
        <br />
        <textarea
          name=""
          id="details"
          rows="4"
          required
          className="post-details"
          placeholder="Post Description"
          onChange={handleChange}
        ></textarea>
        <br />

        <input type="submit" value={"Submit"} className="submit-btn" />
      </form>
    </div>
  );
};
