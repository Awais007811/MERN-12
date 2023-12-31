const CustomError = require("../middleware/CustomError");
const catchAsyncError = require("../middleware/catchAsyncError");
const {
    getUser,
    createUser,
    updateData,
    deleteUser

  } = require("../services/User.service");

exports.GetUser = catchAsyncError(async (req, res, next) => {
    // throw new CustomError("not found", 404);
    const user = await getUser();
    res.json(user);
  });


  exports.createUser  = catchAsyncError( async (req, res, next) => {
    const { username,email,password  } = req.body;
    const user = await createUser(username, email,password);
    res.json(user);
  });

  exports.updateData  = catchAsyncError(async(req,res,next)=>{
    const {id, username,email,password }  = req.body;
    const user  = await updateData(username,email,password);
    res.json(user);

  });
  exports.deleteUser = catchAsyncError(async (req, res, next) => {
    try {
      const { id } = req.body;
      const user = await deleteUser(id);
      res.json(user);
    } catch (error) {
      // Handle the error, e.g., send an error response or call the next middleware
      next(error);
    }
  });
  

  // exports.deleteUser = catchAsyncError(async (req,res,next)=>{
  //   const id = req.body;
  //   const user = await deleteUser(id);
  //   res.json(user);
  // })
  