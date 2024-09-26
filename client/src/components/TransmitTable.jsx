import { useState } from "react";
import "../styles/TransmitalTable.css";
import image_source from "../assets/search.png";

export const TranmitTable = () => {
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
      Remarks: "",
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
      Remarks: "",
    },
  ];

  return (
    <div className="transmittable-container">
      <h2>Transmittal Table</h2>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="search" />
          <img src={image_source} alt="" />
        </div>
      </div>
      <div className="tablespan1">
        <table className="transmit-table">
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
              <th>Document</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Documents.map((doc, index) => (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.DocumentNo}</td>
                <td>{doc.DocumentDescription}</td>
                <td>{doc.Rev}</td>
                <td>
                  <input
                    type="text"
                    className="input-field"
                    value={doc.Prepared}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="input-field"
                    value={doc.Checked}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="input-field"
                    value={doc.Approved}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="input-field"
                    value={doc.Purpose}
                  />
                </td>
                <td>{doc.Remarks}</td>
                <td>Document</td>
                <td>Actions</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
