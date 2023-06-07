const handleError = (res, err) => {
  if (err.message.includes('Cast to ObjectId failed for value')) {
    res.status(404).send({
      message: "Карточка или пользователь не найден",
      err: err.name,
      stack: err.stack,
    });
  } else if (err.name === 'CastError' || err.name === "ValidationError") {
    res.status(400).send({
      message: "Переданы некорректные данные",
      err: err.name,
      stack: err.stack,
    });
  } else {
    res.status(500).send({
      message: "Произошла неизвестная ошибка",
      err: err.name,
      stack: err.stack,
    });
  }
};

module.exports = handleError;
