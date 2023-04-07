import React, { Component } from "react";
import factory from "./../ethereum/factory";
import { Button, Card, Grid, Icon } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "./../routes";
// import PizzaLoading from "../utils/PizzaLoading";
class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }
  getRandomItem() {
    const arr = [
      "ethereum",
      "tech",
      "web3",
      "bitcoin",
      "blockchain",
      "smart contracts",
      "Artificial intelligence",
      "Biometrics",
      "Cloud computing & virtualization",
      "Complex systems",
      "Computational science",
      "Conformance testing",
      "Cyberphysical systems",
      "Cybersecurity",
      "Data & informatics",
      "Federal information processing standards (FIPS)",
      "Health IT",
      "Internet of Things",
      "Interoperability testing",
      "Mobile",
      "Networking",
      "Privacy",
      "Software research",
      "Usability & human factors",
      "Video analytics",
      "Virtual / augmented reality",
      "Visualization research",
      "Voting systems",
    ];
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    const link = `https://source.unsplash.com/random/290x190/?${item}`;
    return link;
  }
  renderCampaigns() {
    return this.props.campaigns.map((address) => {
      return (
        <Grid.Column>
          <Card
            style={{ overflow: "hidden" }}
            raised="true"
            fluid="true"
            image={this.getRandomItem()}
            header="Campaign name"
            meta={`Campaign address: ${
              address.slice(0, 10) + "..." + address.slice(-5)
            }`}
            description={
              <Link route={`/campaigns/${address}`}>
                <Button inverted icon="eye" color="red" content="View Campaign" fluid="true" />
              </Link>
            }
            extra={
              <Button color="black" fluid="true">
                <a
                  style={{ color: "white" }}
                  target="_blank"
                  href={`https://etherscan.io/address/${address}`}
                >
                  <Icon name="sort amount up" />
                  Check this address on Etherscan
                </a>
              </Button>
            }
          />
        </Grid.Column>
      );
    });
  }
  render() {
    return (
      <Layout>
        {/* <PizzaLoading /> */}
        <div>
          <Link route="/campaigns/new">
            <a>
              <Button
                inverted
                icon="add circle"
                content="Create a new Campaign"
                floated="right"
                size="medium"
              />
            </a>
          </Link>
          <h2 style={{color:"white"}}>Open Campaigns</h2>
          <hr />
          {!this.props.campaigns.length ? (
            <div>
              <h1>
                <Icon
                  size="big"
                  name="braille"
                  style={{ marginRight: "40px" }}
                />
                Opps! No open Campaigns to show. You may Create One!
              </h1>
            </div>
          ) : (
            <Grid columns={3}>{this.renderCampaigns()}</Grid>
          )}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;

// "next": "^4.1.4",

// "dependencies": {
//   "css-loader": "^6.7.3",
//   "file-loader": "^6.2.0",
//   "fs-extra": "^11.1.1",
//   "ganache-cli": "^6.12.2",
//   "mocha": "^10.2.0",
//   "next": "^4.1.4",
//   "next-routes": "^1.4.2",
//   "react-dom": "^16.14.0",
//   "semantic-ui-css": "^2.5.0",
//   "semantic-ui-react": "^2.1.4",
//   "solc": "^0.4.26",
//   "style-loader": "^3.3.2",
//   "truffle-hdwallet-provider": "^1.0.17",
//   "url-loader": "^4.1.1",
//   "web3": "^1.9.0"
// }
