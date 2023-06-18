const validator = require('validator');

module.exports.validIsURL = (value) => {
  const result = validator.isURL(value);
  if (result) {
    return value;
  }
  throw new Error('Ссылка невалидна');
};
