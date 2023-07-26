import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

const port = 4000;
const app = express();

app.use(cors({credentials: true}));
app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());

// import api from './routes/index';
// app.use(api);

import search from './routes/search';
app.use(search);

app.get('/', (req, res) => {
    res.send('Client Server for BAP-SDK');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



