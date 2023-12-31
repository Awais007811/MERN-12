const PostModel = require("../models/Post.model");
// export 1. way 1 :: adding export with functions
const createPost = async (title, content,author) => {
  return await PostModel.create({ title, content,author });
};

const getPost = async () => {
  return await PostModel.find();
};

const  deletePost = async (id) =>{
  
  return await PostModel.findByIdAndDelete(id);
};

module.exports = {
    createPost,
    getPost ,
    deletePost
};