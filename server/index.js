require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const router = require('./router');
const app = express();
const PORT = process.env.PORT || 4321;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router.get);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
