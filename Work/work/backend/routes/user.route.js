const express = require("express");
const router = express.Router();
const {
  GetUser,
  createUser,
  updateData,
  deleteUser
  //deleteUser,
} = require("../controllers/User.Controller");
router.get("/", GetUser);
router.post("/", createUser);
router.put("/",updateData);
router.delete("/",deleteUser);
//router.delete("/",deleteUser);

module.exports = router;
