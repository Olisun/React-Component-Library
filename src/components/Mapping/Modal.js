import React, { Component, useState } from "react";
import { Modal, Header, Footer, Title, Body, Button } from "react-bootstrap";

import "./Modal.css";

const ExampleModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { content, moreContent } = props;

  return (
    <div>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {content}
          {moreContent}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ExampleModal;
