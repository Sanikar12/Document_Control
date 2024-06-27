import { useState } from 'react';
import '../styles/Transmittalstyle.css'; // Adjust the path as necessary

export const Transmittal_form = () => {
  const Documents = [
    {
      id: 1,
      DocumentNo: "DOC001",
      DocumentDescription: "Description 1",
      Rev: "2",
      Prepared: "",
      Checked: "",
      Approved: "",
      Purpose: "",
      Remarks: ""
    },
    {
      id: 2,
      DocumentNo: "DOC002",
      DocumentDescription: "Description 2",
      Rev: "4",
      Prepared: "",
      Checked: "",
      Approved: "",
      Purpose: "",
      Remarks: ""
    }
  ];

  const [documents, setDocuments] = useState(Documents);
  const [editMode, setEditMode] = useState(Array(Documents.length).fill(true)); // Track edit mode for each row

  const handleInputChange = (index, field, value) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index] = { ...updatedDocuments[index], [field]: value };
    setDocuments(updatedDocuments);
  };

  const handleDone = (index) => {
    const updatedEditMode = [...editMode];
    updatedEditMode[index] = false; // Disable editing for the current row
    setEditMode(updatedEditMode);
  };

  return (
    <div className="container1">
      <h2>Transmittal Form</h2>
      <div className="tablespan1">
        <table className="table-prop1">
          <thead>
            <tr>
              <th>Sr.No.</th>
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
            {documents.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.DocumentNo}</td>
                <td>{item.DocumentDescription}</td>
                <td>{item.Rev}</td>
                <td>
                  {editMode[index] ? (
                    <input
                      type="text"
                      value={item.Prepared}
                      onChange={(e) => handleInputChange(index, 'Prepared', e.target.value)}
                      className="input-field"
                    />
                  ) : (
                    <span className='span1'>{item.Prepared}</span>
                  )}
                </td>
                <td>
                  {editMode[index] ? (
                    <input
                      type="text"
                      value={item.Checked}
                      onChange={(e) => handleInputChange(index, 'Checked', e.target.value)}
                      className="input-field"
                    />
                  ) : (
                    <span className='span1' >{item.Checked}</span>
                  )}
                </td>
                <td>
                  {editMode[index] ? (
                    <input
                      type="text"
                      value={item.Approved}
                      onChange={(e) => handleInputChange(index, 'Approved', e.target.value)}
                      className="input-field"
                    />
                  ) : (
                    <span className='span1'>{item.Approved}</span>
                  )}
                </td>
                <td>
                  {editMode[index] ? (
                    <input
                      type="text"
                      value={item.Purpose}
                      onChange={(e) => handleInputChange(index, 'Purpose', e.target.value)}
                      className="input-field"
                    />
                  ) : (
                    <span className='span1'>{item.Purpose}</span >
                  )}
                </td>
                <td>
                  {editMode[index] ? (
                    <input
                      type="text"
                      value={item.Remarks}
                      onChange={(e) => handleInputChange(index, 'Remarks', e.target.value)}
                      className="input-field"
                    />
                  ) : (
                    <span className='span1'>{item.Remarks}</span>
                  )}
                </td>
                <td>
                  {editMode[index] && (
                    <button
                      className='button1'
                      onClick={() => handleDone(index)}
                    >
                      Done
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


