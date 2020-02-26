const SHA256 = require("crypto-js/sha256");
const hex2ascii = require("hex2ascii");

const generateHash = data => {
  const hash = SHA256(data).toString();

  return hash;
};

const decodeData = data => {
  const decodedData = hex2ascii(data);

  return decodedData;
};

module.exports = {
  generateHash,
  decodeData
};
