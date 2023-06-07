const router = require('express').Router();

const {
  getCards,
  createCard,
  removeCardById,
  addLikeCardById,
  removeLikeCardById,
} = require('../controllers/card');

router.get('/', getCards);

router.post('/', createCard);

router.put('/:id/likes', addLikeCardById);

router.delete('/:id', removeCardById);
router.delete('/:id/likes', removeLikeCardById);

module.exports = router;
