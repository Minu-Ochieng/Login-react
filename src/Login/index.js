import "./index.css";
import { useState } from "react";
import { login } from "./utlis";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const result = await login({ username, password });
    navigate("./users");
    console.log({ result });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          placeholder="Enter username"
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          placeholder="Enter password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <Link to="/users">
          <button type="submit">Login</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
