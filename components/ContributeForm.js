import React, { Component } from "react";
import { Button, Form, Icon, Input, Label, Message } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";
export default class ContributeForm extends Component {
  state = {
    value: "",
    errorMessage: "",
    loading: false,
    convert: "",
  };
  onSubmit = async (event) => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: this.state.value,
      });

      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: "" });
  };
  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <b style={{ color: "red" }}>Contribute here!</b>
          <Input
            icon="ethereum"
            placeholder="Contribute to this campaign."
            iconPosition="left"
            size="massive"
            value={this.state.value}
            onChange={(event) =>
              this.setState({
                value: event.target.value,
                convert: web3.utils.fromWei(event.target.value, "ether"),
              })
            }
            label="wei"
            labelPosition="right"
          />
          {this.state.convert.length > 1 ? (
            <Label icon="ethereum" color="red">
              <Icon name="exchange" /> {this.state.convert} ethers
            </Label>
          ) : null}
        </Form.Field>
        <Message
          error
          header="Oops!! 
          Transaction cannot be proceeded."
          content={this.state.errorMessage}
        />
        <Button color="red" loading={this.state.loading}>
          Contribute!
        </Button>
      </Form>
    );
  }
}
