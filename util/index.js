const SHA256 = require("crypto-js/sha256");

const generateHash = data => {
  const hash = SHA256(data).toString();

  return hash;
};

module.exports = {
  generateHash
};
