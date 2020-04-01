const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const empSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        unique: true,
        required: true 
    },
    role: {
        type: String,
        trim: true,
        required: true
    },
    department: {
        type: String,
        trim: true,
        required: true
    }
});

const Employee = mongoose.model("Employee", empSchema);

module.exports = Employee;