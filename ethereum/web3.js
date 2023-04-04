import Web3 from "web3";

//Create our own provider which will connect the Sepolia test network through Infura.
let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
  console.log("We are in the browser and metamask is running");
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/6db94808576845bea2af805d04e9e57e"
  );
  web3 = new Web3(provider);
  console.log("We are on the server *OR* the user is not running metamask");
}
export default web3;
