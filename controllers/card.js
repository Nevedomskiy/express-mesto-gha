const Card = require('../models/card');
const handleError = require('../errors/handle-error');
const { changeLike, getData, createData } = require('./helpers/helpers');

const getCards = (req, res) => {
  getData(Card, req, res);
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  createData(Card, { name, link, owner }, req, res);
};

const removeCardById = (req, res) => {
  Card
    .findByIdAndRemove(req.params.id)
    .orFail(new Error('err'))
    .then(card => res.status(200).send(card))
    .catch(err => handleError(res, err));
};

const addLikeCardById = (req, res) => {
  changeLike(Card, { $addToSet: { likes: req.user._id } }, req, res);
};

const removeLikeCardById = (req, res) => {
  changeLike(Card, { $pull: { likes: req.user._id } }, req, res);
};

module.exports = {
  getCards,
  createCard,
  removeCardById,
  addLikeCardById,
  removeLikeCardById,
};
