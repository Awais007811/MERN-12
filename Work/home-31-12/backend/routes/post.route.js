const express = require("express");
const router = express.Router();
const {
  GetPost,
  createPost,
  deletePost
} = require("../controllers/Post.Controller");
router.get("/", GetPost);
router.post("/", createPost);
router.delete("/",deletePost);

module.exports = router;
