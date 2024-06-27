
const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1:27017/Project_01";


const connectDb = async() => {
try{

    await mongoose.connect(URI);
    console.log("DB cnnection Successful");

}catch(error){

    console.error("Database Connection failed");
    ProcessingInstruction.exit(0);
}

};

module.exports = connectDb