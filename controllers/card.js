const Card = require('../models/card');
const handleError = require('../errors/handle-error');

const getCards = (req, res) => {
  Card
    .find({})
    .then((cards) => res.status(200).send(cards))
    .catch(err => handleError(res, err));
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card
    .create({ name, link, owner })
    .then((newCard) => res.status(201).send(newCard))
    .catch(err => handleError(res, err));
};

const removeCardById = (req, res) => {
  Card
    .findByIdAndRemove(req.params.id)
    .orFail(new Error('err'))
    .then(card => res.status(200).send(card))
    .catch(err => handleError(res, err));
};

const addLikeCardById = (req, res) => {
  Card
    .findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likes: req.user._id } },
      { new: true },
    )
    .orFail(new Error('err'))
    .then((newCard) => res.status(200).send(newCard))
    .catch(err => handleError(res, err));
};

const removeLikeCardById = (req, res) => {
  Card
    .findByIdAndUpdate(
      req.params.id,
      { $pull: { likes: req.user._id } },
      { new: true },
    )
    .orFail(new Error('err'))
    .then((newCard) => res.status(200).send(newCard))
    .catch(err => handleError(res, err));
};

module.exports = {
  getCards,
  createCard,
  removeCardById,
  addLikeCardById,
  removeLikeCardById,
};
