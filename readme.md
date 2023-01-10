# Node intro

## Vad ska du göra?

- [ ] Skapa ett startprojekt för en node server.
- [ ] Installera express.
- [ ] Koda en route, hello world.
- [ ] Redigera routen så att du använder Nunjucks för views.

### Vad behöver du?

Din dator; vscode, wsl och node.

### Tid

Arbeta med detta under lektion. Du bör bli klar under lektionspasset.

## Varför

Du behöver kunna skapa en node server för att kunna göra din egen backend. Det är grunden som vi behöver för att kunna arbeta vidare med webbserverprogrammering.

# Hur

## Installation

Skapa mapp och initiera npm projekt.

```bash
mkdir wsp1-node-intro
cd wsp1-node-intro
npm init -y
```

Installera sedan express.

```bash
npm install express
```

Skapa en .gitignore.

```bash
echo node_modules > .gitignore
```

## Hello world

Skriv ett [hello-world exempel](https://expressjs.com/en/starter/hello-world.html).

`app.js`
```javascript
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

```

Starta servern.

```bash
node app.js
```

## Hello world med Nunjucks

Express låter oss använda en view-engine för att skapa html. Vi kommer att använda [Nunjucks](https://mozilla.github.io/nunjucks/).

Installera Nunjucks.

```bash
npm install nunjucks
```

Du kan nu använda nunjucks för att visa html innehållet i din hello world.

`app.js`
```bash
...
const nunjucks = require('nunjucks');
...

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Hello world!',
        title: 'Nunjucks hello world',
    });
});
```

`nunjucks.configur()` konfigurerar nunjucks. `autoescape` säkerställer att html inte kan injiceras i din html. `express` säger åt nunjucks att använda express som sin view-engine. Den första egenskapen är mappen där appens views sparas.

`router.get()` är en express funktion som tar emot en url och en funktion. Funktionen tar emot `req`, `res` och `next` som är standard parametrar för express funktioner. `req` innehåller information om requesten. `res` innehåller funktioner för att svara på requesten. `next` är en funktion som du kan anropa för att gå vidare till nästa middleware.

`res.render()` är en express funktion som tar emot en html fil och data. Den använder nunjucks för att rendera html filen med data.

För att det här ska fungera behöver du nu skapa views.

```bash
mkdir views
touch views/layout.njk
touch views/index.njk
```

`views/layout.njk`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
</head>
<body>
    {% block  content %}
    {% endblock %}
</body>
</html>
```

`views/index.njk`
```html
{% extends "layout.njk" %}
{% block  content %}
  <h1>{{message}}</h1>
{% endblock %}
```

## Startscript och nodemon

För att slippa starta om servern hela tiden vid ändringar osv. kan du använda [nodemon](https://www.npmjs.com/package/nodemon).

Installera nodemon.

```bash
npm install nodemon --save-dev
```

Ändra startscriptet i package.json.

`package.json`
```json
"scripts": {
    "start": "nodemon index.js"
},
```

Du kan nu starta servern med:

```bash
npm start
```

### Öva

**Skapa minst en till route för din app**

[Basic routing](https://expressjs.com/en/starter/basic-routing.html)

Lägg till kod för att kunna visa statiska filer, css, bild, frontend js.

[Static files](https://expressjs.com/en/starter/static-files.html)

**Skapa css och lägg till en bild**

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

## Jag är klar

Skapa en error handler.

