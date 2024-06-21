import "./index.css";

import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="welcome">
        <h2>Welcome to Display User</h2>
        <button type="submit" className="btn">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </>
  );
};
export default Welcome;
