const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://jebinshaju:jebinshaju@cluster0.s0sj5ym.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("db connected");
    })
    .catch(err => console.log(err))

let Schema = mongoose.Schema;

const studentSchema = new Schema({
    sname: String,
    sgrade: Number
})

var studentModel = mongoose.model("students", studentSchema);
module.exports = studentModel