import { Button, Image, Modal } from "react-bootstrap";
import "./App.css";
import { useState } from "react";

import sorriso from "./assets/sorriso.jpg";

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
      <h1>
        Olá minha nega <br /> quer namorar comigo?
      </h1>

      <br />

      <div className="container" id="container">
        <Button variant="success" onClick={handleShow}>
          Quero
        </Button>
        <Button variant="danger" onMouseOver={replace}>
          Não quero
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Image src={sorriso} className="w-100"></Image>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
