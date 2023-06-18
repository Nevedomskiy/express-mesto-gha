const AssertionError = require("./assertion-error");
const BadRequestError = require("./bad-request-error");
const ConflictingRequestError = require("./conflicting-request-error");
const InternalServerError = require("./internal-server-error");
const NotFoundError = require("./not-found-err");

const handleError = (err, next) => {
  console.log(err);
  if (err.message === "err") {
    throw new NotFoundError('Карточка или пользователь не найден');
  } else if (err.name === 'CastError' || err.name === "ValidationError" || err.message.includes("Cast to ObjectId")) {
    throw new BadRequestError('Переданы некорректные данные');
  } else if (err.name === "SyntaxError") {
    throw new NotFoundError('Маршрут указан некорректно');
  } else if (err.code === 11000) {
    throw new ConflictingRequestError('Данная почта уже зарегистрирована');
  } else {
    throw new InternalServerError('На сервере произошла ошибка');
  }
  next();
};

module.exports = handleError;
