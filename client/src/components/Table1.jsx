import { useEffect, useState } from 'react';
import '../styles/TableStyles.css'; // Import the CSS file
import tableData from './data1.json'; // Adjust the path as necessary

export const Table1 = () => {
  const [documents, setDocuments] = useState([]);
  const [revisions, setRevisions] = useState([]);

  useEffect(() => {
    console.log('Table data:', tableData); // Log the imported data
    setDocuments(tableData.documents);
    if (tableData.documents.length > 0) {
      const revKeys = Object.keys(tableData.documents[0].Revisions);
      setRevisions(revKeys);
    }
  }, []);

  useEffect(() => {
    console.log('Documents state:', documents); // Log the state after setting it
  }, [documents]);

  return (
    <div className="container">
      <div className="tablespan">
        <table className="table-prop">
          <thead>
            <tr>
              <th rowSpan="2">Key</th>
              <th rowSpan="2">Project</th>
              <th rowSpan="2">Category</th>
              <th rowSpan="2">DOCUMENT/DRAWING DESCRIPTION</th>
              <th colSpan="7">Document Number</th>
              <th rowSpan="2">Prepared by</th>
              <th rowSpan="2">Remarks</th>
              <th rowSpan="2">Target date1</th>
              <th rowSpan="2">Target date2</th>
              <th rowSpan="2">Target date3</th>
              <th rowSpan="2">Target date4</th>
              <th rowSpan="2">Completion %</th>
              <th rowSpan="2">Weighted Value</th>
              {revisions.map((rev) => (
                <th colSpan="6" key={rev}>{rev}</th>
              ))}
            </tr>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>

              
              {revisions.map((rev) => (
                <>
                  <th key={`${rev}-Date`}>Date</th>
                  <th key={`${rev}-Location`}>Location</th>
                  <th key={`${rev}-Prepared`}>Prepared</th>
                  <th key={`${rev}-Checked`}>Checked</th>
                  <th key={`${rev}-Approved`}>Approved</th>
                  <th key={`${rev}-Transmital`}>Transmital</th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td>{doc['Key']}</td>
                <td>{doc['Project']}</td>
                <td>{doc['Category']}</td>
                <td>{doc['DOCUMENT/DRAWING DESCRIPTION']}</td>
                {doc['Document Number'].map((num, index) => (
                  <td key={index}>{num}</td>
                ))}
                <td>{doc['Prepared by']}</td>
                <td>{doc['Remarks']}</td>
                <td>{doc['Target date1']}</td>
                <td>{doc['Target date2']}</td>
                <td>{doc['Target date3']}</td>
                <td>{doc['Target date4']}</td>
                <td>{doc['Completion %']}</td>
                <td>{doc['Weighted Value']}</td>
                {revisions.map((rev) => (
                  <>
                    <td key={`${doc.id}-${rev}-Date`}>{doc.Revisions[rev].Date}</td>
                    <td key={`${doc.id}-${rev}-Location`}>{doc.Revisions[rev].Location}</td>
                    <td key={`${doc.id}-${rev}-Prepared`}>{doc.Revisions[rev].Prepared}</td>
                    <td key={`${doc.id}-${rev}-Checked`}>{doc.Revisions[rev].Checked}</td>
                    <td key={`${doc.id}-${rev}-Approved`}>{doc.Revisions[rev].Approved}</td>
                    <td key={`${doc.id}-${rev}-Transmital`}>{doc.Revisions[rev].Transmital}</td>
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
