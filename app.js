const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const port = 3000;

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.use(express.static('public'));

app.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Hello world!',
        title: 'Nunjucks hello world',
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
