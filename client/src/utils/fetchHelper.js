import 'whatwg-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log(response);
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

export default function fetchWrapper(url, options = { mode: 'cors' }) {
  return fetch(url, options)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response));
}
