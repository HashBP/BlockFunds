import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x74373C88D96B8DD1bcBfE3525493d2D5B8573125"
);

export default instance;
