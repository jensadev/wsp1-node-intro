# Del 4

- [ ] Skapa nya router och strukturera projektet.

## Flytta routes 

Det fungerar att skriva alla dina routes i appens startpunkt (`index.js`), men det betyder inte att det är bra eller god praxis.
För att dela upp innehållet i vår app så kan du flytta routes till en egen mapp och dela upp dessa i mindre delar.

```bash
mkdir routes
touch routes/index.js
```

För att använda routes behöver de laddas och användas i appen.

`app.js`
```javascript
...
const indexRouter = require('./routes/index');
...
app.use('/', indexRouter);
...
```

Innan det fungerar så behöver koden för den existerande rooten (/) flyttas till route filen, `routes/index.js`.

Eftersom detta blir en middleware så behöver vissa dependencies laddas och sedan användas i funktionen.
I slutet av filen behöver även detta exporteras för att express ska kunan fortsätta.

`routes/index.js`
```javascript
const  express = require('express');
const  router = express.Router();

router.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Hello world! Now with a route file!',
        title: 'Nunjucks hello world',
    });
});

module.exports = router
```

### Öva flytta tidigare routes till en egen fil

Om du har flera router med sammanhörande funktion, flytta dessa till samma fil. Till exempel användar routes, gör då en `routes/user.js` och samla dessa på ett ställe.

# Vidare

[Del 5](part5.md)