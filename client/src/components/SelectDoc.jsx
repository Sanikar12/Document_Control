import '../styles/Transmittalstyle.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TableSelect } from './Master_Table'; // Ensure correct path to TableSelect
import 'bootstrap/dist/css/bootstrap.min.css';  // Adjust the path as necessary
import ModalFooter from 'react-bootstrap/esm/ModalFooter';

export const SelectDoc = () => {
  const [lgShow, setLgShow] = useState(false);
  const [selectedDocuments, setSelectedDocuments] = useState([]);

  const handleDone = (selectedDocs) => {
    setSelectedDocuments([...selectedDocuments, ...selectedDocs]);
    setLgShow(false); // Close modal after selecting documents
  };

  const initialRow = {
    srNo: '',
    documentNo: 'Select Document',
    description: '',
    rev: '',
    prepared: '',
    checked: '',
    approved: '',
    purpose: '',
    remarks: ''
  };

  const tableData = [
    {
      srNo: 1,
      documentNo: 'Document 1',
      description: '',
      rev: 2,
      prepared: '',
      checked: '',
      approved: '',
      purpose: '',
      remarks: ''
    },
    {
      srNo: 2,
      documentNo: 'Document 2',
      description: '',
      rev: 4,
      prepared: '',
      checked: '',
      approved: '',
      purpose: '',
      remarks: ''
    },
    // Add more data objects as needed
  ];

  return (
    <>
      <div className="container1">
        <h2 className='Transmittal'>Transmittal Form</h2>
        <div className="tablespan1">
          <table className="table-prop1">
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Project</th>
                <th>Document No.</th>
                <th>Document Description</th>
                <th>Rev</th>
                <th>Prepared</th>
                <th>Checked</th>
                <th>Approved</th>
                <th>Purpose</th>
                <th>Remarks</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedDocuments.map((doc, index) => (
                <tr key={`selected-${index}`}>
                  <td>{ index + 1}</td>
                  <td>project</td>
                  <td>{doc.documentNo}</td>
                  <td>{doc.description}</td>
                  <td>{doc.rev}</td>
                  <td>
                    <input type="text" className="input-field" value={doc.prepared} />
                  </td>
                  <td>
                    <input type="text" className="input-field" value={doc.checked} />
                  </td>
                  <td>
                    <input type="text" className="input-field" value={doc.approved} />
                  </td>
                  <td>
                    <input type="text" className="input-field" value={doc.purpose} />
                  </td>
                  <td>{doc.remarks}</td>
                  <td><button>Done</button></td>
                </tr>
              ))}
              <tr>
                <td>{initialRow.srNo}</td>
                <td>
                  <button onClick={() => setLgShow(true)} className="button-select">{initialRow.documentNo}</button>
                </td>
                <td></td>
                <td>{initialRow.description}</td>
                <td>{initialRow.rev}</td>
                <td>
                  <input type="text" className="input-field" value={initialRow.prepared} />
                </td>
                <td>
                  <input type="text" className="input-field" value={initialRow.checked} />
                </td>
                <td>
                  <input type="text" className="input-field" value={initialRow.approved} />
                </td>
                <td>
                  <input type="text" className="input-field" value={initialRow.purpose} />
                </td>
                <td>
                  <input type="text" className="input-field" value={initialRow.remarks} />
                </td>
                <td><button>Done</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Documents</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TableSelect onDone={handleDone} />
        </Modal.Body>
        <ModalFooter></ModalFooter>
      </Modal>
    </>
  );
};
