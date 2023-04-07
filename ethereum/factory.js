import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xA7Fc874f7F9b10bd53096CbBe14eF9Cf290988EE"
);

export default instance;