const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/cards');

const URL = 'mongodb://localhost:27017/mestodb';
const app = express();
const { PORT = 3000 } = process.env;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    family: 4,
  })
  .then(() => console.log("ok"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: '647f6e8a255ff0ec8e7c5540',
  };

  next();
});

app.use('/cards', require('./routes/cards'));
app.use('/users', require('./routes/users'));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});
