const upload = require('../models/upload');

// Function to handle document upload
const uploadDoc = async (req, res) => {
    try {
        const {
            Project, DocumentNo, DocumentDescription, Rev,
            Prepared, Checked, Approved, Remarks
        } = req.body;

        await upload.create({
            Project, DocumentNo, DocumentDescription, Rev,
            Prepared, Checked, Approved, Remarks
        });
        console.log(req.body);
        res.status(200).json({ message: 'Document created successfully', document: req.body });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while uploading the document.' });
    }
};

// Function to get all uploaded documents
const getAllUploads = async (req, res, next) => {
    try {
        const data = await upload.find();
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        next(error); // Ensure that the error is passed to the next middleware for handling
    }
};

module.exports = { uploadDoc, getAllUploads };
