import { Link } from "react-router-dom";
import "./Home.css"

export const Navbar = () => {
  return (
    <div className="nav-container">
      <Link to={"/createpost"} className="create-post-btn">Create Post</Link>
    </div>
  );
};
