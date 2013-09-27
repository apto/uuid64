var uuid = require('node-uuid');

var bytesToBase64 = function (bytes) {
  if (typeof Buffer !== 'undefined') {
    var buffer = new Buffer(bytes);
    return buffer.toString('base64');
  } else {
    var str = String.fromCharCode.apply(null, bytes);
    return btoa(str).replace(/.{76}(?=.)/g, '$&\n');
  }
};

var safeBase64 = function (base64) {
  return base64
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

module.exports = function () {
  var bytes = uuid.v4(null, []);
  var base64 = bytesToBase64(bytes);
  return safeBase64(base64);
};