import React, { Component } from "react";
import {
  Form,
  Button,
  Message,
  Input,
  TextArea,
  Label,
  Icon,
} from "semantic-ui-react";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import { Link, Router } from "../../../routes";
import Layout from "../../../components/Layout";

class RequestNew extends Component {
  state = {
    value: "",
    description: "",
    recipient: "",
    loading: false,
    errorMessage: "",
    convert: "",
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.recipient, "This is recipient");

    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts, "ACCOUNT");
      await campaign.methods
        .createRequest(description, value, recipient)
        .send({ from: accounts[0] });

      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h2>Create a Request</h2>
        <hr />
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Description</label>
            <TextArea
              placeholder="Tell us more"
              style={{ minHeight: 200 }}
              value={this.state.description}
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>

          <Form.Field>
            <label>Value in Wei</label>
            <Input
              value={this.state.value}
              icon={"ethereum"}
              iconPosition="left"
              label="wei"
              labelPosition="right"
              size="huge"
              onChange={(event) =>
                this.setState({
                  convert: web3.utils.fromWei(event.target.value, "ether"),
                  value: event.target.value,
                })
              }
            />
            {this.state.convert.length > 1 ? (
              <Label icon="ethereum" color="red">
                <Icon name="exchange" /> {this.state.convert} ethers
              </Label>
            ) : null}
          </Form.Field>

          <Form.Field>
            <label>Address of the Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={(event) =>
                this.setState({ recipient: event.target.value })
              }
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button color="black" loading={this.state.loading}>
            Create!
          </Button>
          <Button color="red">
            <Link route={`/campaigns/${this.props.address}/requests`}>
              <a style={{color:"white"}}>Cancel! </a>
            </Link>
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
