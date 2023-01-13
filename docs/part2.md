# Del 2

- [ ] Koda en route, hello world.
- [ ] Redigera routen så att du använder Nunjucks för views.

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

# Vidare

[Del 3](part3.md)