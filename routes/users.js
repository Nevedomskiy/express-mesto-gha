const router = require('express').Router();

const {
  getUsers,
  getUserById,
  createUser,
  changeUserInfo,
  changeUserAvatar,
} = require('../controllers/user');

router.get('/', getUsers);
router.get('/:id', getUserById);

router.post('/', createUser);

router.patch('/me', changeUserInfo);
router.patch('/me/avatar', changeUserAvatar);

module.exports = router;
