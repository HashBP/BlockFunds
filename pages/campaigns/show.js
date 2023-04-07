import React, { Component } from "react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import { Button, Card, Grid, Icon, Image, Message } from "semantic-ui-react";
import web3 from "./../../ethereum/web3";
import { Link } from "./../../routes";
import ContributeForm from "../../components/ContributeForm";
export default class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      campaignTitle: summary[5],
      campaignDescription: summary[6],
      address: props.query.address,
    };
  }
  renderCards() {
    const { minimumContribution, balance, requestsCount, approversCount } =
      this.props;
    const items = [
      {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this much wei to become an approver",
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the contract. Requests must be approved by approvers",
      },
      {
        header: approversCount,
        meta: "Number of Approvers",
        description:
          "Number of people who have already donated to this campaign",
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description:
          "The balance is how much money this campaign has left to spend.",
      },
    ];
    return <Card.Group itemsPerRow={2} items={items} />;
  }
  render() {
    return (
      <Layout>
        <h1 style={{ color: "white" }}>
          Campaign{" "}
          {this.props.address.slice(0, 16) +
            "..." +
            this.props.address.slice(-5)}
        </h1>
        <Card.Group>
          <Card fluid="true">
            <Card.Content>
              <Card.Header>{this.props.campaignTitle}</Card.Header>
              <Card.Meta>At address: {this.props.address}</Card.Meta>
              <Card.Description>
                {this.props.campaignDescription}
              </Card.Description>
            </Card.Content>
            <Button color="black" floated="right">
              <a
                target="_blank"
                style={{ color: "white" }}
                href={`https://etherscan.io/address/${this.props.address}`}
              >
                <Icon name="sort amount up" />
                Check this address on Etherscan
              </a>
            </Button>
          </Card>
        </Card.Group>
        <hr />
        <h2 style={{color:"white"}}>About Manager</h2>
        <Grid divided columns={2}>
          <Grid.Column width={8}>
            <Card raised="true">
              <Image
                src={`https://robohash.org/${Math.floor(
                  Math.random() * 10000000000
                )}`}
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>
                  {this.props.manager.slice(0, 15) +
                    "..." +
                    this.props.manager.slice(-5)}
                </Card.Header>
                <Card.Meta>Manager</Card.Meta>
                <Card.Description>Managers is the one who has created this campaign and has requested for the funds.</Card.Description>
              </Card.Content>
              <Button color="black" floated="right">
                <a
                  style={{ color: "white" }}
                  target="_blank"
                  href={`https://etherscan.io/address/${this.props.manager}`}
                >
                  <Icon name="sort amount up" />
                  Check this address on Etherscan
                </a>
              </Button>
            </Card>
            <ContributeForm address={this.props.address} />
          </Grid.Column>
          <Grid.Column width={8}>
            <h2 style={{color:"white"}}>About the Campaign</h2>
            {this.renderCards()}
            <hr style={{ marginBottom: "55px" }} />
            <Message
              success
              header="About Requests"
              content="Managers make request for spending the raised funds on this
    campaigns. And contributers approve/deny the request. Become a approver by contributing to this cmapaign."
            />
            <Link route={`/campaigns/${this.props.address}/requests`}>
              <a>
                <Button fluid="true" inverted color="white">
                  View Requests on this campaign
                </Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}
