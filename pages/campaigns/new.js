import React, { Component } from "react";
import Layout from "../../components/Layout";
import {
  Button,
  Form,
  Icon,
  Input,
  Label,
  Message,
  TextArea,
} from "semantic-ui-react";
import factory from "./../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
export default class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    title: "",
    aboutCampaign: "",
    errorMessage: "",
    loading: false,
    convert: "",
  };
  onSubmit = async (e) => {
    if (!this.state.aboutCampaign.length > 1) {
      this.setState({
        errorMessage: "The description field can not be empty.",
      });
      return;
    }
    if (!this.state.title.length > 1) {
      this.setState({ errorMessage: "Title field must be filled." });
    }
    e.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(
          this.state.minimumContribution,
          this.state.title,
          this.state.aboutCampaign
        )
        .send({
          from: accounts[0],
        });
      Router.pushRoute("/");
    } catch (err) {
      console.log(err);
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <Layout>
        <h1 style={{color:"white"}}>Create a Campaign</h1>
        <hr />
        <Form
          error={!!this.state.errorMessage}
          onSubmit={this.onSubmit}
          widths="equal"
        >
          <Form.Field>
            <Input
              size="big"
              icon="ethereum"
              placeholder="Minimum Contribution for your Campaign"
              iconPosition="left"
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={(event) => {
                this.setState({
                  convert: web3.utils.fromWei(event.target.value, "ether"),
                });
                this.setState({ minimumContribution: event.target.value });
                if (this.state.minimumContribution.length <= 1) {
                  this.setState({ errorMessage: "" });
                }
              }}
            />
            {this.state.convert.length > 1 ? (
              <Label icon="ethereum" color="red">
                <Icon name="exchange" /> {this.state.convert} ethers
              </Label>
            ) : null}
            <Input
              style={{ marginTop: "10px" }}
              size="large"
              placeholder="Title"
              value={this.state.title}
              onChange={(event) => {
                this.setState({ title: event.target.value });
              }}
            />
            <Form>
              <TextArea
                placeholder="Describe your campaign"
                icon={"closed captioning outline"}
                value={this.state.aboutCampaign}
                style={{ minHeight: 300, marginTop: "25px" }}
                onChange={(event) => {
                  this.setState({ aboutCampaign: event.target.value });
                  console.log(this.state.aboutCampaign.length);
                }}
              />
            </Form>
          </Form.Field>
          <Message error header="Oops!!" content={this.state.errorMessage} />
          <Button inverted loading={this.state.loading} fluid="true">
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}
