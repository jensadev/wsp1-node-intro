# Del 1

- [ ] Skapa ett startprojekt för en node server.
- [ ] Installera express.
- [ ] Koda en route, hello world.

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

# Vidare

[Del 2](part2.md)