const CustomError = require("../middleware/CustomError");
const catchAsyncError = require("../middleware/catchAsyncError");
const {
    getPost,
    createPost,
    deletePost
  } = require("../services/Post.service");

exports.GetPost = catchAsyncError(async (req, res, next) => {
    // throw new CustomError("not found", 404);
    const post = await getPost();
    res.json(post);
  });


  exports.createPost  = catchAsyncError( async (req, res, next) => {
    const { title,content,author  } = req.body;
    const post = await createPost(title, content,author);
    res.json(post);
  });


  exports.deletePost = catchAsyncError(async (req, res, next) => {
    try {
      const {id} = req.body;
      const post = await deletePost(id);
      res.json(post);
    } catch (error) {
      // Handle the error, e.g., send an error response or call the next middleware
      next(error);
    }
  });