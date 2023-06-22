const Card = require('../models/card');
const { changeLike, getData, createData } = require('./helpers/helpers');
const AssertionError = require('../errors/assertion-error');
const NotFoundError = require('../errors/not-found-err');

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
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      } else if (req.user._id !== card.owner.toString()) {
        throw new AssertionError('Попытка удалить чужую карточку');
      } else {
        Card
          .findByIdAndDelete(req.params.id)
          .then(() => { res.status(200).send({ message: 'Карточка удалена' }); })
          .catch(next);
      }
    })
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
