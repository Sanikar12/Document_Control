import React, { useState } from 'react';
import '../styles/Upload_style.css'; // Adjust the path as necessary

export const Upload_form = () => {
    const initialDocumentState = [
        { id: 1, Project: "", DocumentNo: "", DocumentDescription: "", Rev: "", Prepared: "", Checked: "", Approved: "", Remarks: "", editable: true },
    ];

    const [documents, setDocuments] = useState(initialDocumentState);

    const handleInputChange = (index, field, value) => {
        const updatedDocuments = [...documents];
        updatedDocuments[index] = { ...updatedDocuments[index], [field]: value };
        setDocuments(updatedDocuments);
    };

    const handleDone = (index) => {
        // Handle action when "Done" button is clicked for a specific row
        console.log("Uploaded document:", documents[index]);
        const updatedDocuments = [...documents];
        updatedDocuments[index].editable = false; // Set editable to false after clicking Done
        setDocuments(updatedDocuments);
    };

    const handleAddRow = () => {
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
            editable: true
        };
        setDocuments([...documents, newDocument]);
    };

    return (
        <div className="container2">
            <h2>Upload form</h2>
            <div className="table-container">
                <table className="table-prop2">
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
                            <th>Remarks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td className='Dropdown'>
                                    {item.editable ? (
                                        <select
                                            name="projects"
                                            id={`projects-${item.id}`}
                                            value={item.Project}
                                            onChange={(e) => handleInputChange(index, 'Project', e.target.value)}
                                        >
                                            <option value="">Select Project</option>
                                            <option value="project1">Project1</option>
                                            <option value="Project2">Project2</option>
                                            <option value="Project3">Project3</option>
                                            <option value="Project4">Project4</option>
                                        </select>
                                    ) : (
                                        <span>{item.Project}</span>
                                    )}
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={item.DocumentNo}
                                        onChange={(e) => handleInputChange(index, 'DocumentNo', e.target.value)}
                                        className="input-field"
                                        readOnly={!item.editable} // Make input read-only if not editable
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={item.DocumentDescription}
                                        onChange={(e) => handleInputChange(index, 'DocumentDescription', e.target.value)}
                                        className="input-field"
                                        readOnly={!item.editable} // Make input read-only if not editable
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={item.Rev}
                                        onChange={(e) => handleInputChange(index, 'Rev', e.target.value)}
                                        className="input-field"
                                        readOnly={!item.editable} // Make input read-only if not editable
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={item.Prepared}
                                        onChange={(e) => handleInputChange(index, 'Prepared', e.target.value)}
                                        className="input-field"
                                        readOnly={!item.editable} // Make input read-only if not editable
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={item.Checked}
                                        onChange={(e) => handleInputChange(index, 'Checked', e.target.value)}
                                        className="input-field"
                                        readOnly={!item.editable} // Make input read-only if not editable
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={item.Approved}
                                        onChange={(e) => handleInputChange(index, 'Approved', e.target.value)}
                                        className="input-field"
                                        readOnly={!item.editable} // Make input read-only if not editable
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={item.Remarks}
                                        onChange={(e) => handleInputChange(index, 'Remarks', e.target.value)}
                                        className="input-field"
                                        readOnly={!item.editable} // Make input read-only if not editable
                                    />
                                </td>
                                <td className="button-done">
                                    <button onClick={() => handleDone(index)}>
                                        Done
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className='AddButton' onClick={handleAddRow}>
                Add new
            </button>
        </div>
    );
};
