import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xB707BCc73Af44CC4a2F946c89598f744839A1414"
);

export default instance;