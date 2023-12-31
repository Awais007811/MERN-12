const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const currentDate = new Date();
// const formattedDate = dateFormat(currentDate, 'yyyy-mm-dd HH:MM');

// const date  = Date.now();
// console.log(date);
// date.slice(0,9);

const PostSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    date:{type : Date, default: Date.now('DD-MM-YY'), get:(date)=> date.toLocaleDateString("en-US")}
});

const PostModel = mongoose.model("posts", PostSchema);
module.exports = PostModel;