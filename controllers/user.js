const User = require('../models/user');
const handleError = require('../errors/handle-error');
const { changeData, getData, createData } = require('./helpers/helpers');

const getUsers = (req, res) => {
  getData(User, req, res);
};

const changeUserInfo = (req, res) => {
  const me = req.user._id;
  const { name, about } = req.body;
  changeData(User, { name, about }, me, req, res);
};

const changeUserAvatar = (req, res) => {
  const me = req.user._id;
  const { avatar } = req.body;
  changeData(User, { avatar }, me, req, res);
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
  createData(User, { name, about, avatar }, req, res);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  changeUserInfo,
  changeUserAvatar,
};
