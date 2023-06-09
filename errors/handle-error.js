const handleError = (res, err) => {
  console.log(err.message);
  if (err.message === "err") {
    return res.status(404).send({
      message: "Карточка или пользователь не найден",
      err: err.name,
      stack: err.stack,
    });
  } else if (err.name === 'CastError' || err.name === "ValidationError" || err.message.includes("Cast to ObjectId")) {
    return res.status(400).send({
      message: "Переданы некорректные данные",
      err: err.name,
      stack: err.stack,
    });
  } else if (err.name === "SyntaxError") {
    return res.status(404).send({
      message: "Маршрут указан некорректно",
      err: err.name,
      stack: err.stack,
    });
  } else {
    return res.status(500).send({
      message: "На сервере произошла ошибка",
      err: err.name,
      stack: err.stack,
    });
  }
};

module.exports = handleError;
