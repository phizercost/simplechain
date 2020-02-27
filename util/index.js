const SHA256 = require("crypto-js/sha256");
const hex2ascii = require("hex2ascii");

const generateHash = data => {
  const hash = SHA256(data).toString();

  return hash;
};

const decodeData = data => {
  return hex2ascii(data);
};

const parseJSON = data => {
  return JSON.parse(data);
}

module.exports = {
  generateHash,
  decodeData,
  parseJSON
};
