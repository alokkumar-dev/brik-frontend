import axios from "axios";
import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getPostData = () => {
    axios.get(`http://localhost:8080/post`).then((res) => {
      setData(res.data);
    });
  };

  const delete_post = async (id) => {
    console.log(id)
    try {
      await axios.delete(`http://localhost:8080/post/${id}`);
      window.location.reload(false);
      console.log("post deleted");
    } catch (error) {
      console.log(error.message);
    }
  };
 

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div>
      <h1>Landing Page</h1>
      <div className="post-container">
        {data.map((el) => (
          <div className="post-cart">
            <h2>{el.title}</h2>
            <h4>{el.details}</h4>
            <button
              className="btn btn-delete"
              onClick={() => delete_post(el._id)}
            >
              Delete
            </button>
            <Link className="btn btn-update" to={`/updatepost/${el._id}`} id={el._id}>Update</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
