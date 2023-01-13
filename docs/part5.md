# Del 5

Jag är klar, jag är en boss!

## Skapa en error handler.

`app.js`
```javascript
...
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error.njk');
});
...
```

`views/error.njk`
```html
{% extends "layout.njk" %}
{% block  content %}
<main>
    <h1>{{ message }}</h1>
    <h2>{{ error.status }}</h2>
    <pre>{{ error.stack }}</pre>
</main>
{% endblock %}%
```

## Lägg till användbara paket

[Express-generator](https://expressjs.com/en/starter/generator.html) är ett verktyg för att skapa ett app-skelett. Du har inte använt det i denna övning, men det automatiserar en stor del av det du har gjort (men med lite andra val).

Undersök vilka paket express-generator innehåller och installerar. Är det några användbara bitar du kan använda?

## Undersök express exempel

https://expressjs.com/en/starter/examples.html