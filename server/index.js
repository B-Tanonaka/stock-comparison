require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router.get);

