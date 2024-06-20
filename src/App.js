import "./Login";
import "./App.css";
import Login from "./Login";
import Users from "./Users";
import Modal from "./Modal";
import { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLoginSuccess = (data) => {
    setUserData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {<Login />}

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Users />
        </Modal>
      )}
    </div>
  );
};
export default App;
