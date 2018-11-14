const _axios = require('axios');

exports.handleException = (error, fileName, lineNumber, window, server) => {
  let json = {};
  json.error = getErrorDetails(error);
  json.navigator = getNavigator(window);
  getCurrentPage(json, window);
  getComputerDetails(json);
  getErrorLocation(json, fileName, lineNumber);
  sendJson(json, server);
}

const getErrorDetails = (error) => {
  if (error && error.message) {
    return error.message;
  }
}

const getErrorLocation = (json, fileName, lineNumber) => {
  if (fileName) {
    json.fileName = fileName;
  }
  
  if (lineNumber) {
    json.lineNumber = lineNumber;
  }
}

const getNavigator = (window) => {
  let navigatorName = {};

  if (window && window.navigator) {
    navigatorName = window.navigator.vendor;
  }

  return navigatorName;
}

const getCurrentPage = (json, window) => {
  if (window && window.document) {
    json.url = window.document.URL;
  }
}

const getComputerDetails = (json) => {
  if (typeof process !== 'undefined') {
    json.username = process.env.USERNAME ? process.env.USERNAME : 'undefined';
    json.computername = process.env.COMPUTERNAME ? process.env.COMPUTERNAME : 'undefined';
  }
}

const sendJson = (json, server) => {
  _axios.post(server, json)
  .catch((error) => console.log(error));
}
