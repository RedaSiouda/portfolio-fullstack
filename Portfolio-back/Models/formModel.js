const mongoose = require('mongoose');

//initialisation of the form Schema
const formSchema = new mongoose.Schema({
    email: String,
    message: String,
    timeStamp: String,
});

//create an instance of mongoose model
const FormModel = mongoose.model('Form', formSchema);

module.exports = FormModel;
