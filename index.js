const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    let response = '';

    if (text === '') {
        // This is the first request. Note how we start the response with the initial prompt.
        response = `CON Murakaza neza kuri E-justice.\n
            1. Kuzuza imyirondoro\n
        `;
    }else if(text === '1'){
        response = `CON Uzuza izina ryawe:`;
        if(text.length > 2){
            response = `CON Uzuza umwaka wavutsemo.`;
            if(text.length === 4) {
                response = `CON Hitamo icyo tugufasha kuri E-justice. \n
                    1. Uburenganzira bw'abana\n
                    2. Uburenganzira bw'ababashakanye\n
                    3. Ihohoterwa rishingiye ku gitsina\n
                    4. Uburenganzira bw'ababashakanye\n
                `;

                if(text === '1'){
                    response = `CON Uburenganzira bw'abana \n
                        Ingingo ya 1: Uburenganzira bwo kwiga \n
                        Ingingo ya 2: Ntibakwiye gukoreshwa imirimo ivunanye.\n
                        Ingingo ya 3: Uburenganzira ku myambaro\n
                        \n\n
                        5. Gusubira inyuma\n
                    `;
                }
            }
        }
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
