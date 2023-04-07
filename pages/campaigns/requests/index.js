import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Link } from "./../../../routes";
import { Button, Icon, Label, Table } from "semantic-ui-react";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";
export default class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    const summary = await campaign.methods.getSummary().call();
    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );
    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      campaignTitle: summary[5],
      campaignDescription: summary[6],
      address: props.query.address,
      requests,
      requestCount,
      approversCount,
    };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          approversCount={this.props.approversCount}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h2
          style={{ color: "white" }}
        >{`Requests on campaign ${this.props.address}`}</h2>
        <h3 style={{ color: "white" }}>{`Manager: ${this.props.manager}`}</h3>
        <hr />
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button
              inverted
              icon="plus circle"
              floated="right"
              style={{ marginBottom: 10 }}
              content="Add new request"
            />
          </a>
        </Link>
        <Label pointing="right" as="a" color="red" tag>
          Note: You can only add request if you are the manager of this
          campaign.
        </Label>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount (in Wei)</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
        {this.props.requestCount === "0" ? (
          <h1 style={{ marginTop: "55px" }}>
            <Icon size="big" name="braille" style={{ marginRight: "25px" }} />
            "No request found on this campaign by the manager."
          </h1>
        ) : null}
      </Layout>
    );
  }
}
