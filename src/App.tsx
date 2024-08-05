import { useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const replace = () => {
    const container = document.getElementById("container");
    container?.classList.toggle("order");
  };

  return (
    <>
      <h1>{import.meta.env.VITE_TITLE}</h1>

      <br />

      <div className="container" id="container">
        <Button variant="success" onClick={handleShow}>
          {import.meta.env.VITE_CONFIRM_LABEL}
        </Button>
        <Button variant="danger" onMouseOver={replace}>
          {import.meta.env.VITE_DENY_LABEL}
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Image
            src={import.meta.env.VITE_RESPONSE_IMAGE}
            className="w-100"
          ></Image>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
