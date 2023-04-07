import React, { Component } from "react";
import factory from "./../ethereum/factory";
import { Button, Card, Grid, Icon } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "./../routes";
import PizzaLoading from "../utils/PizzaLoading";
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
            image={this.getRandomItem()}
            header="Campaign name"
            meta={`Campaign address: ${
              address.slice(0, 10) + "..." + address.slice(-5)
            }`}
            description={"Description of this campaign"}
            extra={
              <Link route={`/campaigns/${address}`}>
                <Button icon="eye" content="View Campaign" fluid="true" />
              </Link>
            }
          />
        </Grid.Column>
      );
    });
  }
  render() {
    return (
      <Layout>
        <PizzaLoading/>
        <div>
          <Link route="/campaigns/new">
            <a>
              <Button
                icon="add circle"
                content="Create a new Campaign"
                color="black"
                floated="right"
                size="medium"
              />
            </a>
          </Link>
          <h2>Open Campaigns</h2>
          <hr />
          {!this.props.campaigns.length ? (
            <div>
            <h1>
              <Icon size="big" name="braille" style={{marginRight:"40px"}}/>
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
