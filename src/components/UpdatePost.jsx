import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdatePost = () => {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const getOnePost = () => {
    axios.get(`${process.env.REACT_APP_API}post/${id}`).then((res) => {
      setData(res.data);
      console.log(data);
    });
  };

  const handleChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .patch(`${process.env.REACT_APP_API}post/${id}`, formData)
      .then((res) => {
        alert("Post Updated");
        navigate("/landingpage");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getOnePost();
  }, []);

  return (
    <div className="form-container">
      <h1 className="title-heading">User Update Post</h1>
      <form action="" onSubmit={handleSubmit} className="form">
        <input
          type="text"
          id="title"
          required
          onChange={handleChange}
        //   value={data.title || ""}
          className="post-title"
          placeholder="Post Title"
        />
        <br />
        <textarea
          name=""
          id="details"
          rows="4"
          required
          onChange={handleChange}
        //   value={data.details || ""}
          className="post-details"
          placeholder="Post Description"
        ></textarea>
        <br />

        <input type="submit" value={"Submit"} className="submit-btn" />
      </form>
    </div>
  );
};
