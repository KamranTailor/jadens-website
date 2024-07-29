// index.js 

import express from 'express';

const port = process.env.PORT || 8080;

import app from './api/main.js';

app.use(express.static('public'));
app.listen(port, () => console.log(`Listening at port ${port}`));
