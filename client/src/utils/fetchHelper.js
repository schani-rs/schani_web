import 'whatwg-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  if (response.status === 204) {
    return response;
  }
  return response.json();
}

export default function fetchWrapper(url, options = {}) {
  const corsOptions = options;
  corsOptions.mode = 'cors';
  return fetch(SCHANI_APIGATEWAY + url, corsOptions) // eslint-disable-line no-undef
    .then(response => checkStatus(response))
    .then(response => parseJSON(response));
}
