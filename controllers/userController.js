const User = require("../Models/userModel");

exports.fetchUsers = async (req, res) => {

    try {
    
        var { page, limit = 10 } = req.query;
        page = parseInt(page) || 1;
        var skip = (page - 1) * limit;


     var data= await User.find({}).skip(skip).limit(limit);
  
      res.status(200).json({
        message: "Users Data fetched successfully",
        data: data
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
        message: error._message,
      });
    }
  };

  exports.addUsers = async (req, res) => {

    try {
     
      var data = await User.create(req.body);
  
      res.status(200).json({
        message: "Users Data added successfully",
        data
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
        message: error._message,
      });
    }
  };
  exports.deleteUsers = async (req, res) => {

    try {
     
      var data = await User.findByIdAndDelete(req.params._id);
  
      res.status(200).json({
        message: "Users Deleted successfully",
        data
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
        message: error._message,
      });
    }
  };
  
  exports.updateUser = async (req,res) => {
    const { userId } = req.params;

  try {
    const user = await User.findByIdAndUpdate(
      { _id: userId },
      {
        $set: {
          ...req.body,
        },
      },
      { new : true,
        useFindAndModify: false}
    );
    res.status(200).json({
    
      data: user,
      message: "Updated"
    });
  } catch (error) {

    
    res.status(400).json({
      message: error.message,
    });
  }
  }

  exports.updatePoints = async (req,res) => {
    const { userId,points } = req.params;

  try {
    const user = await User.findByIdAndUpdate(
      { _id: userId },
      {
        $set: {
          points,
        },
      },
      { new : true,
        useFindAndModify: false}
    );
    res.status(200).json({
      message: "Updated"
    });
  } catch (error) {

    
    res.status(400).json({
      message: error.message,
    });
  }
  }

  