import { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import "../styles/Upload_style.css"; // Adjust the path as necessary

export const UploadForm = ({ sidebar }) => {
  const initialDocumentState = [
    {
      id: 1,
      Project: "",
      DocumentNo: "",
      DocumentDescription: "",
      Rev: "",
      Prepared: "",
      Checked: "",
      Approved: "",
      Remarks: "",
      editable: true,
      selected: false,
    },
  ];

  const [documents, setDocuments] = useState(initialDocumentState);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false); // Track if file has been uploaded
  const [addRowClicked, setAddRowClicked] = useState(false); // Track if "Add new" row button is clicked

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });

      // Assume the first sheet is the one we want
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert sheet to JSON
      const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      if (data.length > 1) {
        // Check if there are data rows (excluding header)
        // Filter out empty rows and header row
        const filteredData = data
          .slice(1)
          .filter((row) => row.some((cell) => cell !== ""));

        // Prepare new documents array with uploaded data
        const newDocuments = filteredData.map((row, index) => ({
          id: index + 1,
          Project: row[1] || "", // Use select tag for first row, empty string for others
          DocumentNo: row[2] || "",
          DocumentDescription: row[3] || "",
          Rev: row[4] || "",
          Prepared: row[5] || "",
          Checked: row[6] || "",
          Approved: row[7] || "",
          Remarks: row[8] || "",
          editable: true,
          selected: false,
        }));

        setDocuments(newDocuments);
        setFileUploaded(true); // Set fileUploaded to true after successful upload
      } else {
        console.error("Uploaded file is empty or invalid.");
      }
    };

    if (file) {
      reader.readAsBinaryString(file);
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index] = { ...updatedDocuments[index], [field]: value };
    setDocuments(updatedDocuments);
  };

  const handleDone = async () => {
    // Validate all fields are filled
    for (const doc of documents) {
      if (
        !doc.Project ||
        !doc.DocumentNo ||
        !doc.DocumentDescription ||
        !doc.Rev ||
        !doc.Prepared ||
        !doc.Checked ||
        !doc.Approved ||
        !doc.Remarks
      ) {
        alert("Please fill out all fields before submitting.");
        return;
      }
    }

    // Convert select field (Project) to span with selected text
    const updatedDocuments = documents.map((doc) => ({
      ...doc,
      editable: false, // Set editable to false for all documents after "Done" is clicked
      Project:
        typeof doc.Project === "object" ? (
          <span>{doc.Project.props.children}</span>
        ) : (
          doc.Project
        ),
    }));

    setDocuments(updatedDocuments);

    try {
      for (const doc of documents) {
        const response = await axios.post(
          "http://localhost:5001/api/auth/create",
          doc,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Server response:", response.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddRow = () => {
    setAddRowClicked(true); // Set addRowClicked to true when "Add new" row button is clicked
    const newDocument = {
      id: documents.length + 1,
      Project: "",
      DocumentNo: "",
      DocumentDescription: "",
      Rev: "",
      Prepared: "",
      Checked: "",
      Approved: "",
      Remarks: "",
      editable: true,
      selected: false,
    };
    setDocuments([...documents, newDocument]);
  };

  const toggleSelect = (index) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index].selected = !updatedDocuments[index].selected;
    setDocuments(updatedDocuments);
  };

  const handleClearOrDelete = () => {
    if (!showDeleteButton) {
      // Show checkboxes for selection
      setShowDeleteButton(true);
    } else {
      // Delete selected rows
      const updatedDocuments = documents.filter((doc) => !doc.selected);
      setDocuments(updatedDocuments);
      setShowDeleteButton(false);
    }
  };

  return (
    <div className={`uploadform-table `}>
      <h2>Upload form</h2>
      <div className={`table-container`}>
        <table className={`table-prop2 ${sidebar ? "" : "large-table-prop2"}`}>
          <thead>
            <tr>
              <th>Sr.No.</th>
              {showDeleteButton && <th>Select</th>}
              <th>Project</th>
              <th>Document No.</th>
              <th>Document Description</th>
              <th>Rev</th>
              <th>Prepared</th>
              <th>Checked</th>
              <th>Approved</th>
              <th>Remarks</th>
              <th>Document</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                {showDeleteButton && (
                  <td>
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => toggleSelect(index)}
                    />
                  </td>
                )}
                <td className="Dropdown">
                  {index === 0 ? ( // Render select tag only for the first row
                    <select
                      name={`projects-${item.id}`}
                      id={`projects-${item.id}`}
                      value={item.Project}
                      onChange={(e) =>
                        handleInputChange(index, "Project", e.target.value)
                      }
                      required
                      disabled={!item.editable} // Disable select when not editable
                    >
                      <option value="">Select Project</option>
                      <option value="Project1">Project1</option>
                      <option value="Project2">Project2</option>
                      <option value="Project3">Project3</option>
                      <option value="Project4">Project4</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={item.Project}
                      onChange={(e) =>
                        handleInputChange(index, "Project", e.target.value)
                      }
                      className="uploadform-input-field"
                      // Make input read-only if not editable
                      required
                    />
                  )}
                </td>
                <td>
                  <input
                    type="text"
                    value={item.DocumentNo}
                    onChange={(e) =>
                      handleInputChange(index, "DocumentNo", e.target.value)
                    }
                    className="uploadform-input-field"
                    readOnly={!item.editable} // Make input read-only if not editable
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.DocumentDescription}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        "DocumentDescription",
                        e.target.value
                      )
                    }
                    className="uploadform-input-field"
                    readOnly={!item.editable} // Make input read-only if not editable
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.Rev}
                    onChange={(e) =>
                      handleInputChange(index, "Rev", e.target.value)
                    }
                    className="uploadform-input-field"
                    readOnly={!item.editable} // Make input read-only if not editable
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.Prepared}
                    onChange={(e) =>
                      handleInputChange(index, "Prepared", e.target.value)
                    }
                    className="uploadform-input-field"
                    readOnly={!item.editable} // Make input read-only if not editable
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.Checked}
                    onChange={(e) =>
                      handleInputChange(index, "Checked", e.target.value)
                    }
                    className="uploadform-input-field"
                    readOnly={!item.editable} // Make input read-only if not editable
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.Approved}
                    onChange={(e) =>
                      handleInputChange(index, "Approved", e.target.value)
                    }
                    className="uploadform-input-field"
                    readOnly={!item.editable} // Make input read-only if not editable
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.Remarks}
                    onChange={(e) =>
                      handleInputChange(index, "Remarks", e.target.value)
                    }
                    className="uploadform-input-field"
                    readOnly={!item.editable} // Make input read-only if not editable
                  />
                </td>
                <td>
                  <input
                    type="file"
                    onChange={(e) => handleFileUpload(e)}
                    className="file-input"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="upload">
        {!fileUploaded && (
          <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
        )}
      </div>
      <button className="AddButton" onClick={handleAddRow}>
        Add new
      </button>
      <button
        className={showDeleteButton ? "DeleteButton" : "ClearButton"}
        onClick={handleClearOrDelete}
      >
        {showDeleteButton ? "Delete" : "Clear"}
      </button>
      <button className=" DoneButton1" onClick={handleDone}>
        Done
      </button>
    </div>
  );
};
