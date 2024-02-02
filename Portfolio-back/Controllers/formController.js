//import the model of the form
const FormModel = require('../Models/formModel');

//check if form validate
const validateForm = ({ email, message }) => {
    return !email || !message;
};

//function to post the form
const postForm = async (req, res) => {
    try {
        //retreive the content of the email and message input
        const { email, message } = req.body;

        //handle 404 not found 
        if (validateForm(req.body)) {
            return res.status(400).json({ error: 'Missing content' });
        }

        //initialisation of a new FormModel
        const newFormData = new FormModel({
            email,
            message,
            timeStamp: new Date().toISOString(),
        });
        //save the new form into the database (mongoDB)
        const savedForm = await newFormData.save();
        res.status(200).json(savedForm);
    } catch (err) {
        console.error('Failed to send form:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    postForm,
};
