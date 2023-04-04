const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");
//Infura API
// stereo erosion build kid north festival butter inmate need also news reopen - Pneunomics sof metamask account
const provider = new HDWalletProvider(
  "stereo erosion build kid north festival butter inmate need also news reopen",
  "https://sepolia.infura.io/v3/6db94808576845bea2af805d04e9e57e"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account ", accounts[0]);
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("Contract deployed to", result.options.address);
};
deploy();

//=---------= - Address of the smart contract deployed on Sepolia Etherium Network.
