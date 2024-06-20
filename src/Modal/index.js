const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          {children}
          <button onClick={isOpen}></button>
        </div>
      </div>
    </>
  );
};
export default Modal;
