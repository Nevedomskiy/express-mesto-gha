const handleError = require('../../errors/handle-error');

const changeData = (out, body, id, req, res) => {
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
    .catch(err => handleError(res, err));
};

const changeLike = (out, method, req, res) => {
  out
    .findByIdAndUpdate(
      req.params.id,
      method,
      { new: true },
    )
    .orFail(new Error('err'))
    .then((newCard) => res.status(200).send(newCard))
    .catch(err => handleError(res, err));
};

const getData = (out, req, res) => {
  out
    .find({})
    .then((data) => res.status(200).send(data))
    .catch(err => handleError(res, err));
};

const createData = (out, body, req, res) => {
  out
    .create(body)
    .then((newData) => res.status(201).send(newData))
    .catch(err => handleError(res, err));
};

module.exports = {
  changeData,
  getData,
  createData,
  changeLike,
};
