require('dotenv').config();
const rp = require('request-promise');

const urlBase = process.env.URL_INDICADORES_ECONOMICOS;

function request(url = '', body = {}, type = 'POST') {
  const options = {
    method: type,
    uri: `${urlBase}${url}`,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
      'Accept-language': 'es'
    },
    body,
    json: true
  };
  return rp(options);
}
function consultarIndicadores() {
  return request('', {}, 'GET');
}

module.exports = { consultarIndicadores };
