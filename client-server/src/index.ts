import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import './db';

const port = 4000;
const app = express();

app.use(cors({credentials: true}));
app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());

import sdk from './routes/boilerplate.api';
app.use(sdk);

// //Using the Boilerplate for domain domain-specific services
// const retail = require('../routes/boilerplate.api');
// app.use(retail);  //For retail domain

// const mobility = require('../routes/boilerplate.api');
// app.use(mobility);  //For mobility domain

app.get('/', (req, res) => {
    res.send('Client Server for BAP-SDK');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



