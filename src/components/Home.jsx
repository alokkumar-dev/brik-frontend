import axios from "axios";
import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
 

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);


  const getPostData = () => {
    axios.get("https://elated-jewelry-goat.cyclic.app/post").then((res) => {
      setData(res.data);
      console.log(res.data._id);
    });
  };

//   const deletePostData = () => {
//     axios.delete("https://elated-jewelry-goat.cyclic.app/post").then((res) => {
//         setDeleteData((previousState) => {
//           return {
//             movies: previousState.movies.filter((m) => m.id !== movie.id),
//           };
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <div className="post-container">
        {data.map((el) => (
          <div className="post-cart">
            <h2>{el.title}</h2>
            <h4>{el.details}</h4>
            <button className="btn btn-delete">Delete</button>
            <button className="btn btn-update">Update</button>
          </div>
        ))}
      </div>
    </div>
  );
};
