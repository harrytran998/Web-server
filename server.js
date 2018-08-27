const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.send('Hello mother Fucker !');
    res.send({
        name: 'Nhat',
        habit: [
            'Fucking',
            'Sleeping'
        ]
    });
});

app.get('/about', (req,res) => {
    res.send('<h1>Fuck</h1>');
});

app.get('/bad', (req,res) => {
    res.send('Du ma sai gon !');
});

app.listen(3000);