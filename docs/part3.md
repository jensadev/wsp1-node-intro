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

`package.json`
```json
...
"scripts": {
    "start": "nodemon index.js"
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

# Övningar

**Skapa css fil och använd i hello world exemplet**

**Återanvänd gammal Nunjucks, ta din nav från tidigare 11ty projekt och anpassa för detta**

# Vidare

[Del 4](part4.md)