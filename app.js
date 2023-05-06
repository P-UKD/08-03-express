import express from 'express';
import fs from 'fs';
import path from 'path';

const port = 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});