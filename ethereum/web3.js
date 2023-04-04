const Web3 = require("web3");

//Create our own provider which will connect the Sepolia test network through Infura.
const provider = new Web3.providers.HttpProvider(
  "https://sepolia.infura.io/v3/6db94808576845bea2af805d04e9e57e"
);
const web3 = new Web3(provider);

module.exports = web3;
