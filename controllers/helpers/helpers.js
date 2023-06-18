const handleError = require('../../errors/handle-errors');

const changeData = (out, body, id, req, res, next) => {
  out
    .findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      },
    )
    .orFail(new Error('err'))
    .then((user) => res.status(200).send(user))
    .catch(err => handleError(err))
    .catch(next);
};

const changeLike = (out, method, req, res, next) => {
  out
    .findByIdAndUpdate(
      req.params.id,
      method,
      { new: true },
    )
    .orFail(new Error('err'))
    .then((newCard) => res.status(200).send(newCard))
    .catch(err => handleError(err))
    .catch(next);
};

const getData = (out, req, res, next) => {
  out
    .find({})
    .orFail(new Error('err'))
    .then((data) => res.status(200).send(data))
    .catch(err => handleError(err))
    .catch(next);
};

const createData = (out, body, req, res, next) => {
  out
    .create(body)
    .then((newData) => res.status(201).send(newData))
    .catch(err => handleError(err))
    .catch(next);
};

module.exports = {
  changeData,
  getData,
  createData,
  changeLike,
};
