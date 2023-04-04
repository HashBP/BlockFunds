const web3 = require("./web3");
const CampaignFactory = require("./build/CampaignFactory.json");
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xB2D7F5aE73D807b64a47385C10B8612eec3DD8ca"
);

module.exports=instance;
