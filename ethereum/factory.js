import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x292e5Ecbb44317741bdE9776630169620590bCDA"
);

export default instance;