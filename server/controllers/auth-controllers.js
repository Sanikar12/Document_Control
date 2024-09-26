const Master_Table = require("../models/one");
const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ message: req.body });

    const {
      project,
      Category,
      Description,
      Document_No,
      Document_No1,
      Document_No2,
      Document_No3,
      Document_No4,
      Document_No5,
      Document_No6,
      Document_No7,
      Prepared_By,
      Remarks,
      Target_date1,
      Target_date2,
      Target_date3,
    } = req.body;

    await Master_Table.create({
      project,
      Category,
      Description,
      Document_No,
      Document_No1,
      Document_No2,
      Document_No3,
      Document_No4,
      Document_No5,
      Document_No6,
      Document_No7,
      Prepared_By,
      Remarks,
      Target_date1,
      Target_date2,
      Target_date3,
    });
    console.log(req.body);
  } catch (error) {
    req.status(500).json("Internal server error");
  }
};

module.exports = { register };
