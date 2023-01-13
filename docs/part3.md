# Del 3

- [ ] Installera nodemon.
- [ ] Hantera statiska filer så att du kan inkludera css.

## Startscript och nodemon

För att slippa starta om servern hela tiden vid ändringar osv. kan du använda [nodemon](https://www.npmjs.com/package/nodemon).

Installera nodemon.

```bash
npm install nodemon --save-dev
```

Ändra startscriptet i package.json.
Lägg även till `-e njk`så att nodemon lyssnar på ändringar i njk filer.

`package.json`
```json
...
"scripts": {
    "start": "nodemon -e njk index.js"
},
...
```

Du kan nu starta servern med:

```bash
npm start
```

## Statiska filer

Lägg till kod för att kunna visa statiska filer, css, bild, frontend js.

[Static files](https://expressjs.com/en/starter/static-files.html)

Filerna/mapparna ska ligga i en public mapp. Det är god praxis och är en standard som används på servrar. Public mappen syns inte, men innehållet i den finns tillgängligt för användaren av servern.


## Sass

Om du vill använda sass. Så behöver du se till att paketet är installerat.
Sedan uppdaterar du din script fil, skapar mappar osv.

```json
  "scripts": {
    "start": "nodemon -e njk app.js & npm run scss",
    "scss": "sass --watch scss:public/css"
  },
```
# Övningar

**Skapa css fil och använd i hello world exemplet**

**Återanvänd gammal Nunjucks, ta din nav från tidigare 11ty projekt och anpassa för detta**

Om du anpassar en nav från 11ty som är skriven med _data fil så behöver du tänka på några saker.
11tys struktur och data mapp fungerar inte i node, det är 11ty specifikt.
Du kan återanvända en nav.json, men du behöver då konvertera det till ett js objekt och skicka det till din view.

```js
nav = [
    {
        "title": "Home",
        "url": "/"
    }
]

...render(fil, {nav: nav})
```

```html
{% for item in nav %}
    <li><a href="{{ item.url }}">{{ item.title }}</a></li>
{% endfor %}
```

# Vidare

[Del 4](part4.md)