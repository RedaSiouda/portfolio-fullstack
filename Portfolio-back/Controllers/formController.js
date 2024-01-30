const FormModel = require('../Models/formModel');

const validateForm = ({ email, message }) => {
    return !email || !message;
};

const postForm = async (req, res) => {
    try {
        const { email, message } = req.body;

        if (validateForm(req.body)) {
            return res.status(400).json({ error: 'Missing content' });
        }

        const newFormData = new FormModel({
            email,
            message,
            timeStamp: new Date().toISOString(),
        });

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
