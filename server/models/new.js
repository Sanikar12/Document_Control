const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    project : {
        type : String,
        require: true,
    },
    Category : {
        type : String,
        require: true,
    },
    Description : {
        type : String,
        require: true,
    },
    
    Document_No: {
        type : String,
        require: true,
    },

    Document_No1: {
        type : String,
        require: true,
    },
    Document_No2: {
        type : String,
        require: true,
    },
    Document_No3: {
        type : String,
        require: true,
    },
    Document_No4: {
        type : String,
        require: true,
    },
    Document_No5: {
        type : String,
        require: true,
    },
    Document_No6: {
        type : String,
        require: true,
    },
    Document_No7: {
        type : String,
        require: true,
    },
    Prepared_By: {
        type : String,
        require: true,
    },
    Remarks: {
        type : String,
        require: true,
    },
    Target_date1: {
        type : Date,
        default: Date.now,
    },
    Target_date2: {
        type : Date,
        default: Date.now,
    },
    Target_date3: {
        type : Date,
        default: Date.now,
    },
    Target_date4: {
        type : Date,
        default: Date.now,
    },

    Completion: {
        type : String,
        require: true,
    },

    WeightedValue:{
        type : String,
        require: true,
    },

    Rev_date:{
        type : Date,
        default: Date.now,

    },

    Rev_Location:{
        type : String,
        require: true,
    },
     
    Rev_prepared:{
        type : String,
        require: true,
    },

    Rev_Checked:{
        type : String,
        require: true,
    },
    Rev_Approved:{
        type : String,
        require: true,
    },
    Rev_Transmitted:{
        type : String,
        require: true,
    }

})
 

const Master_table = new mongoose.model("Master_table",userSchema);

module.exports = Master_table;

