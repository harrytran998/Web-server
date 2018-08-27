const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
/**
 * Dùng để hiển thị trang html || cái # trong folder #
 */
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

app.listen(3000);