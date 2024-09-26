const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    Project: {
        type: String,
        required: true,
    },
    DocumentNo: {
        type: String,
        required: true,
    },
    DocumentDescription: {
        type: String,
        required: true,
    },
    Rev: {
        type: String,
        required: true,
    },
    Prepared: {
        type: String,
        required: true,
    },
    Checked: {
        type: String,
        required: true,
    },
    Approved: {
        type: String,
        required: true,
    },
    Remarks: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Document = mongoose.model('Uploaded_Doc1', documentSchema);

module.exports = Document;
