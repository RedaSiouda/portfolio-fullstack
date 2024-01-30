const express = require('express');
const path = require('path'); // Import the 'path' module
const router = express.Router();
const formController = require('../Controllers/formController');

// Post form route
router.post('/postForm', formController.postForm);

// Default route to handle the root URL
router.get('/', (req, res) => {
    // Assuming your index.html is in a 'public' folder
    const indexPath = path.join(__dirname, '../public/index.html');
    res.sendFile(indexPath);
});

module.exports = router;
