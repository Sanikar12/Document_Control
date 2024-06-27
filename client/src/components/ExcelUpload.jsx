import React, { useState } from 'react';
import { useTable } from 'react-table';
import * as XLSX from 'xlsx';
import '../styles/Upload_style.css'; // Adjust the path as necessary

export const UploadExcel = () => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (e) => {
            const binaryStr = e.target.result;
            const workbook = XLSX.read(binaryStr, { type: 'binary' });

            // Assume the first sheet is the one we want
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // Convert sheet to JSON
            const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            if (data.length > 0) {
                // Extract headers and rows
                const headers = data[0];
                const rows = data.slice(1);

                // Prepare columns for react-table
                const cols = headers.map(header => ({ Header: header, accessor: header }));
                setColumns(cols);

                // Prepare data for react-table
                const tableData = rows.map(row => {
                    const rowData = {};
                    row.forEach((cell, index) => {
                        rowData[headers[index]] = cell;
                    });
                    return rowData;
                });

                setData(tableData);
            } else {
                console.error("Uploaded file is empty or invalid.");
            }
        };

        if (file) {
            reader.readAsBinaryString(file);
        }
    };

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data });

    return (
        <div className="container3">
            <h2>Upload Excel File</h2>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
            <div className="table-container">
                <table {...getTableProps()} className="table-prop3">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
