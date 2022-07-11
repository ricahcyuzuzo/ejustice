const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    let response = '';

    if (text === '') {
        // This is the first request. Note how we start the response with the initial prompt.
        response = `CON Welcome to the e-justice service.\n
            1. Register a name\n
            2. Age\n
            3. Address\n
        `;
    }else if(text === '1'){
        response = `CON Enter your name:`;
    } else if(text === '2'){
        response = `CON Enter your age:`;
    } else if(text === '3'){
        response = `CON Enter your address:`;
    }

    res.set('Content-Type', 'text/plain');
    res.send(response);
    // Done
});

module.exports = router;
