const express = require('express');
const dotenv = require('dotenv');
const ejs = require('ejs');
const path = require('path');

const appRouter = require('./routes/appRoutes');

dotenv.config({ path: './config/.env' });

const PORT = process.env.PORT

const app = express();

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.use('/', appRouter);

app.listen(PORT, () => { console.log(`server started on port ${PORT}`) });

