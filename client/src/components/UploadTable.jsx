import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/TabUpload.css";
import image_source from "../assets/search.png";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

export const UpdateTable = () => {
  const [uploadTable, setUploadTable] = useState([]);

  // Function to fetch data from API
  const getAllReportsData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/auth/getTable",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Set the fetched data to state
      setUploadTable(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    getAllReportsData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Dummy data similar to Documents in TabTransmit
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
    <div className="updatetable-container3">
      <h2>Upload Table</h2>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={image_source} alt="Search Icon" />
        </div>
      </div>
      <div className="table-container">
        <table className="upload-tab-table-prop">
          <thead>
            <tr>
              <th>
                <div className="header-content">Sr.No.</div>
              </th>
              <th>
                <div className="header-content">
                  Project
                  <div className="header-icon-wrapper">
                    <ArrowDropDownOutlinedIcon />
                  </div>
                </div>
              </th>
              <th>
                <div className="header-content">
                  Document No.
                  <div className="header-icon-wrapper">
                    <ArrowDropDownOutlinedIcon />
                  </div>
                </div>
              </th>
              <th>
                <div className="header-content">Document Description</div>
              </th>
              <th>
                <div className="header-content">Rev</div>
              </th>
              <th>
                <div className="header-content">
                  Prepared
                  <div className="header-icon-wrapper">
                    <ArrowDropDownOutlinedIcon />
                  </div>
                </div>
              </th>
              <th>
                <div className="header-content">
                  Checked
                  <div className="header-icon-wrapper">
                    <ArrowDropDownOutlinedIcon />
                  </div>
                </div>
              </th>
              <th>
                <div className="header-content">
                  Approved
                  <div className="header-icon-wrapper">
                    <ArrowDropDownOutlinedIcon />
                  </div>
                </div>
              </th>
              <th>
                <div className="header-content">Remarks</div>
              </th>
              <th>
                <div className="header-content">Document</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Render Documents similar to TabTransmit */}
            {Documents.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.id}</td>
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
              </tr>
            ))}
            {/* Render API data */}
            {uploadTable.map((document, index) => (
              <tr key={document.id}>
                <td>{index + 1}</td>
                <td>{document.Project}</td>
                <td>{document.DocumentNo}</td>
                <td>{document.DocumentDescription}</td>
                <td>{document.Rev}</td>
                <td>{document.Prepared}</td>
                <td>{document.Checked}</td>
                <td>{document.Approved}</td>
                <td>{document.Remarks}</td>
                <td>Document</td> {/* Placeholder, adjust as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
