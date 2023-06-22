const BadRequestError = require("../../errors/bad-request-error");
const NotFoundError = require('../../errors/not-found-err');
const InternalServerError = require('../../errors/internal-server-error');

const changeData = (out, body, id, req, res, next) => {
  out
    .findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      },
    )
    .orFail(new NotFoundError('Данные не найдены'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.message === 'Данные не найдены') {
        if (out === User) {
          throw new NotFoundError('Пользователь не найден');
        } else {
          throw new NotFoundError('Карточка не найдена');
        }
      }
      if (err.name === 'CastError') {
        throw new BadRequestError('Переданы некорректные данные');
      }
    })
    .catch(next);
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
        throw new NotFoundError('Карточка не найдена');
      }
      if (err.name === 'CastError') {
        throw new BadRequestError('Переданы некорректные данные');
      }
    })
    .catch(next);
};

const getData = (out, req, res, next) => {
  out
    .find({})
    .orFail(new InternalServerError('На сервере произошла ошибка'))
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
          throw new BadRequestError('Переданы некорректные данные пользователя');
        } else {
          throw new BadRequestError('Переданы некорректные данные карточки');
        }
      }
    })
    .catch(next);
};

const getUserData = (out, id, res, next) => {
  out
    .findById(id)
    .orFail(new NotFoundError('Данные не найдены'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.message === 'Данные не найдены') {
        throw new NotFoundError('Пользователь не найден');
      }
      if (err.name === 'CastError') {
        throw new BadRequestError('Переданы некорректные данные');
      }
    })
    .catch(next);
};

module.exports = {
  changeData,
  getData,
  createData,
  changeLike,
  getUserData,
};
