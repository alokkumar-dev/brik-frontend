import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Home";
import { Login } from "../Login";
import { Register } from "../Register";
import { CreatePost } from "../CreatePost";
import { LendingPage } from "../LendingPage";
import { UpdatePost } from "../UpdatePost";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/landingpage" element={<LendingPage />} />
        <Route path="/updatepost/:id" element={<UpdatePost />} />
      </Routes>
    </>
  );
};

// ===========================

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [data, setData] = useState([]); // state for holding data
//   const [formData, setFormData] = useState({}); // state for holding form data

//   useEffect(() => {
//     // fetch data on component mount
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     // fetch data from an API
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     setData(data);
//   };

//   const handleFormChange = (event) => {
//     // update form data state on form input change
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (formData.id) {
//       // if form data has an id, update existing data
//       await fetch(`https://api.example.com/data/${formData.id}`, {
//         method: "PUT",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       fetchData();
//     } else {
//       // if form data has no id, create new data
//       await fetch("https://api.example.com/data", {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       fetchData();
//     }

//     // clear form data state after form submission
//     setFormData({});
//   };

//   const handleEditClick = (data) => {
//     // set form data state to selected data for editing
//     setFormData(data);
//   };

//   const handleDeleteClick = async (id) => {
//     // delete data by id
//     await fetch(`https://api.example.com/data/${id}`, {
//       method: "DELETE",
//     });
//     fetchData();
//   };

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name || ""}
//           onChange={handleFormChange}
//         />
//         <input
//           type="text"
//           name="description"
//           value={formData.description || ""}
//           onChange={handleFormChange}
//         />
//         <button type="submit">{formData.id ? "Update" : "Create"}</button>
//       </form>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>
//             {item.name} - {item.description}{" "}
//             <button onClick={() => handleEditClick(item)}>Edit</button>{" "}
//             <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
