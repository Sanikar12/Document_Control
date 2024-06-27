import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TableSelect } from './Master_Table'; // Ensure correct path to TableSelect
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Example() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>Open Large Modal</Button>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="custom-modal"
      >
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
          <TableSelect />
    
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
