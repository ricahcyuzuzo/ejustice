const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    let response = '';

    if (text === '') {
        // This is the first request. Note how we start the response with the initial prompt.
        response = `CON Murakaza neza kuri I-justice.\n
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
                2. Uburenganzira bwabashakanye\n
                3. Ihohoterwa rishingiye kugitsina\n
                4. Gusiga ubutumwa\n
            `;
            if(ussdRoute[2] === '1') {
                response = `CON Uburenganzira bw' abana\n
                    1. Impamvu zatuma umwana ashakirwa ahandi arererwa\n
                    2. Kwita ku mwana ufite ubumuga\n
                    3. Kureba Itegeko Ryerekeye Kurengera Umwana\n
                    4. Vugisha umukozi wacu.\n
                `;
                if(ussdRoute[3] === '1') {
                    response = `END Nta mwana ugomba gutandukanywa n’umuryango we nta mpamvu. Ku
                    bw’inyungu ze, umwana ashobora kwamburwa umubyeyi we, umwishingizi
                    cyangwa undi wese umufiteho ububasha mu buryo buteganywa n’amategeko
                    agashyirwa ahandi arererwa kubera: ihohoterwa rikorewe mu rugo, ibikorwa
                    bibi, kudashobora kumurera kubera uburwayi bwo mu mutwe cyangwa se
                    umubyeyi yambuwe ububasha bwa kibyeyi. (ingingo ya 11)`

                }else if(ussdRoute[3] === '2'){
                    response = `END Umubyeyi afite inshingano yo kwita ku mwana ufite ubumuga.
                    Leta yita ku umwana ufite ubumuga bwihariye
                    bw’umubiri cyangwa ubwo mu mutwe iyo
                    bibaye ngombwa.
                    Umwana ufite ubumuga bwihariye
                    bw’umubiri cyangwa bwo mu mutwe
                    ashyirwa mu kigo cyabigenewe kugira ngo
                    yitabweho kandi avurwe mu gihe bibaye
                    ngombwa.`
                }else if(ussdRoute[3] === '3'){
                    response = `END Itegeko N°71/2018 Ryo Ku Wa 31/08/2018 Ryerekeye Kurengera Umwana`
                }else if(ussdRoute[3] === '4') {
                    response = 'END Hamagara 0788478335, uvugane numukozi wacu ushinzwe icyi kiciro.'
                }
            }else if(ussdRoute[2] === '2'){
                response = `CON Uburenganzira bw'abashakanye\n
                    1. Uburenganzira ku mutungo w’abashyingiranywe\n
                    2. Kugira uruhare mu bitunga urugo\n
                    3. Kureba Itegeko rigenga abantu n’umuryango\n
                    4. Vugisha umukozi wacu.\n
                `;

                if(ussdRoute[3] === '1') {
                    response = `END Uburenganzira ku mutungo w’abashyingiranywe butangira bakimara
                    gushyingirwa imbere y’umwanditsi w’irangamimerere hakurikijwe uburyo
                    bw’icungamutungo bahisemo. Iyo ishyingirwa risheshwe cyangwa iyo riteshejwe
                    agaciro mbere y’uko abashyingiranywe babana nta nkurikizi rigira ku mutungo
                    w’abashyingiranywe keretse iyo bigaragaye ko hari uwo bari barafatanyije.
                    (ingingo ya 208)`

                }else if(ussdRoute[3] === '2'){
                    response = `END Buri wese mu bashyingiranywe agomba kugira
                    uruhare mu bitunga urugo rwabo bikurikije uburyo
                    n’amikoro ye.`

                }else if(ussdRoute[3] === '3'){
                    response = `END Nº 32/2016 ryo ku wa 28/08/2016 Itegeko rigenga abantu n’umuryango`
                }else if(ussdRoute[3] === '4') {
                    response = 'END Hamagara 0788478335, uvugane numukozi wacu ushinzwe icyi kiciro.'
                }
            }else if(ussdRoute[2] === '3') {
                response = `CON Ihohoterwa rishingiye kugitsina\n
                    1. Uburenganzira ku mutungo w’abashyingiranywe\n
                    2. Kurinda umwana ihohoterwa rishingiye ku gitsina\n
                    3. Kureba Itegeko Ryerekeye Kurengera Umwana\n
                    4. Vugisha umukozi wacu.
                `;

                if(ussdRoute[3] === '1') {
                    response = `END Abashyingiranywe bafite uburenganzira bungana ku birebena n’imibonano
                    mpuzabitsina, ubw’ubuzima bw’imyororokere no kuboneza urubyaro. Birabujijwe
                    gukoresha ku gahato imibonano mpuzabitsina uwo mwashyingiranywe. (ingingo
                    ya 5) Ihohoterwa rishingiye ku gitsina ni imwe mu mpamvu ituma uwahohotewe
                    asaba ubutane.`

                }else if(ussdRoute[3] === '2'){
                    response = `END Umubyeyi, umwishingizi w’umwana cyangwa

                    undi muntu wese ushinzwe umwana agomba
                    kumurinda impamvu iyo ari yo yose yatuma
                    akorerwa ihohoterwa rishingiye ku gitsina.
                    Birabujijwe kutita ku mwana ushinzwe kurera,
                    kumukoresha icyamutesha agaciro cyangwa
                    kumuhoza ku nkeke hashingiwe ku gitsina.`
                }else if(ussdRoute[3] === '3'){
                    response = `END itegeko n°59/2008 ryo kuwa10/09/2008 rikumira kandi rihanaihohoterwa iryo ari ryo ryose
                    rishingiye ku gitsina`
                }else if(ussdRoute[3] === '4') {
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
