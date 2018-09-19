const moment = require('moment');

/**
 * Function to get the no present keys in a object
 * @param {array} keys
 * @param {Object} object
 * @returns {array}
 */
function getMissinKeys(keys, object) {
  const array = keys
    .map(element => {
      const hasOwnProperty = Object.prototype.hasOwnProperty.call(
        object,
        element
      );
      if (!hasOwnProperty) {
        return element;
      }
      return null;
    })
    .filter(element => element !== null);
  return array;
}

/**
 * Function to validate if an object has the all keys that send in keys param
 *
 * @param {any} keys
 * @param {any} object
 * @returns
 */
function validateKeys(keys, object) {
  const array = keys
    .map(element => {
      const hasOwnProperty = Object.prototype.hasOwnProperty.call(
        object,
        element
      );
      if (hasOwnProperty) {
        return element;
      }
      return null;
    })
    .filter(element => element !== null);
  if (array.length > 0) {
    return true;
  }
  return false;
}

/**
 * Function to generate a random string
 *
 * @return {String}
 */
function generateRandomString() {
  let value = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let index = 0;
  while (index < 15) {
    value += possible.charAt(Math.floor(Math.random() * possible.length));
    index += 1;
  }
  return value;
}

const validateValueInKeys = (keys, value) => keys.includes(value);

/**
 * Function to generate a date adding the days
 *
 * @return {Date}
 */
function addDaysFromDate(startDate, numberOfDays) {
  const date = moment(startDate);
  return date.add(numberOfDays, 'days');
}

module.exports = {
  getMissinKeys,
  validateKeys,
  generateRandomString,
  validateValueInKeys,
  addDaysFromDate
};
