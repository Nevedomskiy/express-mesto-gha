const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const handleError = require('../errors/handle-errors');
const { changeData, getData } = require('./helpers/helpers');

const { NODE_ENV, JWT_SECRET } = process.env;

const getUsers = (req, res, next) => {
  getData(User, req, res, next);
};

const changeUserInfo = (req, res, next) => {
  const me = req.user._id;
  const { name, about } = req.body;
  changeData(User, { name, about }, me, req, res);
};

const changeUserAvatar = (req, res, next) => {
  const me = req.user._id;
  const { avatar } = req.body;
  changeData(User, { avatar }, me, req, res);
};

const getUserById = (req, res, next) => {
  User
    .findById(req.params.id)
    .orFail(new Error('err'))
    .then((user) => res.status(200).send(user))
    .catch(err => handleError(err))
    .catch(next);
};

const getUserInfo = (req, res, next) => {
  User
    .findById(req.user._id)
    .orFail(new Error('err'))
    .then((user) => res.status(200).send(user))
    .catch(err => handleError(err))
    .catch(next);
};

const createUser = (req, res, next) => {
  const {
    name,
    about,
    avatar,
    email,
    password,
  } = req.body;
  bcrypt.hash(password, 10)
    .then(hash => User.create({
      name,
      about,
      avatar,
      email,
      password: hash,
    }))
    .then((user) => res.status(201).send(user))
    .catch(err => handleError(err))
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res.cookie(
        'jwt',
        token,
        {
          maxAge: 360000,
          httpOnly: true,
          sameSite: true,
        },
      );
      res.status(201).send({ message: 'Вход успешно выполнен' });
    })
    .catch(next);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  getUserInfo,
  changeUserInfo,
  changeUserAvatar,
  login,
};
