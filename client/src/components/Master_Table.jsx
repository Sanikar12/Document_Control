import React, { useState } from 'react';
import '../styles/Transmittalstyle.css'; // Ensure correct path

export const TableSelect = ({ onDone }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const data = [
    {
      id: 1,
      documentNo: 'Document 1',
      description: 'Description 1',
      rev: 2,
      prepared: 'Person A',
      checked: '',
      approved: '',
      purpose: '',
      remarks: 'Remark A'
    },
    {
      id: 2,
      documentNo: 'Document 2',
      description: 'Description 2',
      rev: 4,
      prepared: 'Person B',
      checked: '',
      approved: '',
      purpose: '',
      remarks: 'Remark B'
    },
    {
        id: 3,
        documentNo: 'Document 3',
        description: 'Description 2',
        rev: 4,
        prepared: 'Person B',
        checked: '',
        approved: '',
        purpose: '',
        remarks: 'Remark B'
      },
      {
        id: 4,
        documentNo: 'Document 4',
        description: 'Description 2',
        rev: 4,
        prepared: 'Person B',
        checked: '',
        approved: '',
        purpose: '',
        remarks: 'Remark B'
      },
      {
        id: 5,
        documentNo: 'Document 5',
        description: 'Description 2',
        rev: 4,
        prepared: 'Person B',
        checked: '',
        approved: '',
        purpose: '',
        remarks: 'Remark B'
      },
      {
        id: 6,
        documentNo: 'Document 6',
        description: 'Description 2',
        rev: 4,
        prepared: 'Person B',
        checked: '',
        approved: '',
        purpose: '',
        remarks: 'Remark B'
      },
      {
        id: 7,
        documentNo: 'Document 7',
        description: 'Description 2',
        rev: 4,
        prepared: 'Person B',
        checked: '',
        approved: '',
        purpose: '',
        remarks: 'Remark B'
      },
      {
        id: 8,
        documentNo: 'Document 8',
        description: 'Description 2',
        rev: 4,
        prepared: 'Person B',
        checked: '',
        approved: '',
        purpose: '',
        remarks: 'Remark B'
      },
      {
        id: 9,
        documentNo: 'Document 9',
        description: 'Description 2',
        rev: 4,
        prepared: 'Person B',
        checked: '',
        approved: '',
        purpose: '',
        remarks: 'Remark B'
      },
      {
        id: 10,
        documentNo: 'Document 10',
        description: 'Description 2',
        rev: 4,
        prepared: 'Person B',
        checked: '',
        approved: '',
        purpose: '',
        remarks: 'Remark B'
      },
      {
        id: 11,
        documentNo: 'Document 2',
        description: 'Description 11',
        rev: 4,
        prepared: 'Person B',
        checked: '',
        approved: '',
        purpose: '',
        remarks: 'Remark B'
      },
      {
        id: 12,
        documentNo: 'Document 12',
        description: 'Description 2',
        rev: 4,
        prepared: 'Person B',
        checked: '',
        approved: '',
        purpose: '',
        remarks: 'Remark B'
      },
    // Add more data objects as needed
  ];

  const toggleSelect = (id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelectedRows = [...selectedRows];

    if (selectedIndex === -1) {
      newSelectedRows.push(id);
    } else {
      newSelectedRows = newSelectedRows.filter(rowId => rowId !== id);
    }

    setSelectedRows(newSelectedRows);
  };

  const handleDone = () => {
    const selectedDocs = data.filter(item => selectedRows.includes(item.id));
    onDone(selectedDocs);
    setSelectedRows([]); // Clear selection after done
  };

  return (
    <>
    <div className="container1">
      <div className="tablespan1">
      <button  className='doneButton' onClick={handleDone}>Done</button>
        <table className="table-prop1">
          <thead>
            <tr>
              <th>Select</th>
              <th>Document No.</th>
              <th>Description</th>
              <th>Rev</th>
              <th>Prepared</th>
              <th>Checked</th>
              <th>Approved</th>
              <th>Purpose</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td><input type="checkbox" onChange={() => toggleSelect(item.id)} /></td>
                <td>{item.documentNo}</td>
                <td>{item.description}</td>
                <td>{item.rev}</td>
                <td>{item.prepared}</td>
                <td>{item.checked}</td>
                <td>{item.approved}</td>
                <td>{item.purpose}</td>
                <td>{item.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
    
    </>);
};
