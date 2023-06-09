const router = require('express').Router();

const {
  getUsers,
  getUserById,
  createUser,
  changeUserInfo,
  changeUserAvatar,
} = require('../controllers/user');

// function errorHandler(err, req, res, next) {
//   throw new Error("Когда в коде появляется ошибка, в мире грустит один тестировщик");
//   // console.log(err.message);
//   // if (res.headersSent) {
//   //   return next(err);
//   // }
//   // res.status(500);
//   // res.send({
//   //   message: "Маршрут указан некорректно",
//   //   err: err.name,
//   //   stack: err.stack,
//   // });
// }

router.get('/', getUsers);
router.get('/:id', getUserById);

router.post('/', createUser);

router.patch('/me', changeUserInfo);
router.patch('/me/avatar', changeUserAvatar);

module.exports = router;
