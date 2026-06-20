const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/product', (req, res) => {
    res.send('Here comes your product!');
})

app.get('/about', (req, res) => {
    res.send('This is a about page!');
})

app.listen(3000)