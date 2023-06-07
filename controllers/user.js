const User = require('../models/user');
const handleError = require('./error');

const getUsers = (req, res) => {
  User
    .find({})
    .then((users) => res.status(200).send(users))
    .catch(err => handleError(res, err));
};

const changeUserInfo = (req, res) => {
  const { name, about } = req.body;
  const me = req.user._id;
  User
    .findByIdAndUpdate(
      me,
      { name, about },
      {
        new: true,
      },
    )
    .orFail(new Error('err'))
    .then((user) => res.status(200).send(user))
    .catch(err => handleError(res, err));
};

const changeUserAvatar = (req, res) => {
  const { avatar } = req.body;
  const me = req.user._id;
  User
    .findByIdAndUpdate(
      me,
      { avatar },
      {
        new: true,
        runValidators: true,
      },
    )
    .orFail(new Error('err'))
    .then((user) => res.status(200).send(user))
    .catch(err => handleError(res, err));
};

const getUserById = (req, res) => {
  User
    .findById(req.params.id)
    .orFail(new Error('err'))
    .then((user) => res.status(200).send(user))
    .catch(err => handleError(res, err));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User
    .create({ name, about, avatar })
    .then((newUser) => res.status(201).send(newUser))
    .catch(err => handleError(res, err));
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  changeUserInfo,
  changeUserAvatar,
};
