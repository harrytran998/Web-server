const express = require('express');
const app = express();
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
/**
 * Dùng để hiển thị trang html || cái # trong folder #
 */

app.use((req, res, next) => {
    const now = new Date().toString();
    const log = `${now}\n${req.method}\nlocallhost:3000${req.url}`;
    console.log(log);
    fs.appendFileSync('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    });
    next(); // middleware
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

/**
 * @param {String} txt
 */
hbs.registerHelper('screamIt', (txt) => {
    return txt.toUpperCase();
});

app.get('/', (req, res) => {
    // res.send('Hello mother Fucker !');
    res.render('home.hbs', {
        pageTitle: 'Home',
        welcomeHome: 'Fuck You !',
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});