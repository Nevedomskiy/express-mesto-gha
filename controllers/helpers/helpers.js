const BadRequestError = require("../../errors/bad-request-error");
const NotFoundError = require('../../errors/not-found-err');
const InternalServerError = require('../../errors/internal-server-error');

const changeData = (out, body, id, req, res, next, errMessage) => {
  out
    .findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      },
    )
    .orFail(new NotFoundError(errMessage))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
      }
    });
};

const changeLike = (out, method, req, res, next) => {
  out
    .findByIdAndUpdate(
      req.params.id,
      method,
      { new: true },
    )
    .orFail(new NotFoundError('Данные не найдены'))
    .then((newCard) => res.status(200).send(newCard))
    .catch((err) => {
      if (err.message === 'Данные не найдены') {
        next(new NotFoundError('Карточка не найдена'));
      }
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
      }
    });
};

const getData = (out, req, res, next) => {
  out
    .find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(next);
};

const createData = (out, body, req, res, next) => {
  out
    .create(body)
    .then((newData) => res.status(201).send(newData))
    .catch((err) => {
      if (err.name === 'CastError' || err.name === "ValidationError") {
        if (out === User) {
          next(new BadRequestError('Переданы некорректные данные пользователя'));
        } else {
          next(new BadRequestError('Переданы некорректные данные карточки'));
        }
      }
    });
};

const getUserData = (out, id, res, next) => {
  out
    .findById(id)
    .orFail(new NotFoundError('Данные не найдены'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.message === 'Данные не найдены') {
        next(new NotFoundError('Пользователь не найден'));
      }
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
      }
    });
};

module.exports = {
  changeData,
  getData,
  createData,
  changeLike,
  getUserData,
};
