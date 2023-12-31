const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, unique:true, required: true },
    password: { type: String }
});
const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;