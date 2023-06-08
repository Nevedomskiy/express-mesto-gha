const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cardRouter = require('./routes/cards');
const userRouter = require('./routes/users');

const URL = 'mongodb://localhost:27017/mestodb';
const app = express();
const { PORT = 3000 } = process.env;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    family: 4,
  });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: '647f6e8a255ff0ec8e7c5540',
  };

  next();
});

app.use('/cards', cardRouter);
app.use('/users', userRouter);
app.use((req, res) => {
  res.status(404).send({
    message: "Маршрут указан некорректно",
  });
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});
