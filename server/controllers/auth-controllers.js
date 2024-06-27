
const Master_table = require("../models/new")


const home = async(req,res) => {
    try {
       res
       .status(200)
       .send(
        "Welcome to the controllers section using router"
       );
    }catch(error) {
        console.log(error);
    }
};

const register = async(req,res) => {
    try {
        console.log(req.body);
       res.status(200).json({ message :req.body });
      
      
      const {
        project,Category,Description,Document_No,Document_No1,
        Document_No2,Document_No3,Document_No4,Document_No5,
        Document_No6,Document_No7,Prepared_By,Remarks,
        Target_date1,Target_date2,Target_date3,
       } = req.body;
    
       console.log(req.body);
       
    }catch(error) {
        console.log(error);
    }
};

module.exports = { home,register };

