const Card = require('../models/card');
const handleError = require('../errors/handle-errors');
const { changeLike, getData, createData } = require('./helpers/helpers');
const UnauthorizedError = require('../errors/unauthorized-error');

const getCards = (req, res, next) => {
  getData(Card, req, res, next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  createData(Card, { name, link, owner }, req, res, next);
};

const removeCardById = (req, res, next) => {
  Card
    .findById(req.params.id)
    .orFail(new Error('err'))
    .then((card) => {
      if (req.user._id === card.owner.toString()) {
        return Card.deleteOne(card);
      } else {
        throw new UnauthorizedError('Попытка удалить чужую карточку');
      }
    })
    .then(() => res.status(200).send({ message: 'Карточка удалена' }))
    .catch(err => handleError(err))
    .catch(next);
};

const addLikeCardById = (req, res, next) => {
  changeLike(Card, { $addToSet: { likes: req.user._id } }, req, res, next);
};

const removeLikeCardById = (req, res, next) => {
  changeLike(Card, { $pull: { likes: req.user._id } }, req, res, next);
};

module.exports = {
  getCards,
  createCard,
  removeCardById,
  addLikeCardById,
  removeLikeCardById,
};
