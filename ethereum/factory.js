import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x065FA962f37c2727C1065EF82aeb60e2722e857a"
);

export default instance;
