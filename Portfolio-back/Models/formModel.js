const mongoose = require('mongoose');


const formSchema = new mongoose.Schema({
    email: String,
    message: String,
    timeStamp: String,
});

const FormModel = mongoose.model('Form', formSchema);

module.exports = FormModel;