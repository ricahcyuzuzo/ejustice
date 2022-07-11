const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    let response = '';

    if (text === '') {
        // This is the first request. Note how we start the response with the initial prompt.
        response = `CON Murakaza neza kuri E-justice.\n
            Uzuza amazina yawe.\n
        `;
    }
    if(text !== '') {
        let ussdRoute = text?.split("*");
        console.log(ussdRoute);
        if(ussdRoute?.length === 1){
            response = `CON Uzuza umwaka wavutsemo\n`;
        }else if(ussdRoute?.length > 1) {
            response = `CON Hitamo icyo tugufasha kuri E-Justice\n
                1. Uburenganzira bw'abana\n
                2. Ihohoterwa\n
                3. Uburenganzira bw'abakozi\n
                4. Gusiga ubutumwa\n
            `;
            if(ussdRoute[2] === '1') {
                response = `CON Uburenganzira bw' abana\n
                    - Umwana akwiye kwiga\n
                    - Umwana akwiye kwambikwa\n
                    - Umwana akwiye kugaburirwa\n
                    - Umwana ntakwiye kuvunishwa\n
                    1. Hamagara Umukozi wacu\n
                `;

                if(ussdRoute[3] === '1') {
                    response = 'END Hamagara 0788478335, uvugane numukozi wacu ushinzwe icyi kiciro.'
                }
            }else if(ussdRoute[2] === '2'){
                response = `CON Ihohoterwa\n
                    - Ihohoterwa rishingiye kugitsina\n
                    - Gukubita no gukomeretsa ni ihohotera\n
                    - Guharabika umuntu uwo ariwe wese\n
                    1. Hamagara Umukozi wacu.
                `;

                if(ussdRoute[3] === '1') {
                    response = 'END Hamagara 0788478335, uvugane numukozi wacu ushinzwe icyi kiciro.'
                }
            }else if(ussdRoute[2] === '3') {
                response = `CON Uburenganzira bw' Abakozi\n
                    - Umukozi agomba kugira ubwishingizi mu kwivuza\n
                    - Umukozi agomba guhemberwa ku gihe\n
                    - Umukozi agomba guhabwa ikiruhuko gihagije\n
                    1. Hamagara Umukozi wacu.
                `;

                if(ussdRoute[3] === '1') {
                    response = 'END Hamagara 0788478335, uvugane numukozi wacu ushinzwe icyi kiciro.'
                }
            }else if(ussdRoute[2] === '4'){
               response = 'CON Andika hano ubutumwa bugufi\n'
               if(ussdRoute.length === 4){
                response = 'END Murakoze gutanga ubutumwa bwawe. Mugire amahoro.\n'
               }
            }
        }
    }
        

    res.set('Content-Type', 'text/plain');
    res.send(response);
    // Done
});

module.exports = router;
