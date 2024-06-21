import "./Login";
import "./App.css";
import Login from "./Login";
import Users from "./Users";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";

const App = () => {
  return (
    <div>
      {/* <Login />
      <Users /> */}
      <Welcome />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};
export default App;
