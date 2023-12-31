const express = require("express");
const cors = require("cors");
const app = express();
// const productRoutes = require("./routes/product.route");
// const todoRoutes = require("./routes/todo.routes");
const userRoutes = require("./routes/user.route");
const postRoutes = require("./routes/post.route");

const connectDatabase = require("./database/connection");
const handleError = require("./middleware/error");

connectDatabase();
app.use(cors());
app.use(express.json());
// app.use("/todo", todoRoutes);
// app.use("/product",productRoutes);
app.use("/users",userRoutes);
app.use("/posts",postRoutes);
app.use(handleError);

module.exports = app; // default export
