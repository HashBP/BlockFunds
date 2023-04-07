import React, { Component } from "react";
import { Button, Icon, Input, Menu } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <Menu fluid size="large" widths={6}>
        <Menu.Item>
          <Icon name="connectdevelop" size="large" color="brown" />
          <b>Lets Talk!</b>
        </Menu.Item>
        <Menu.Item>
          <Icon size="large" name="linkedin" color="blue" />
        </Menu.Item>
        <Menu.Item>
          <Icon size="large" name="git" color="pink" />
        </Menu.Item>
        <Menu.Item>
          <Icon size="large" name="youtube" color="red" />
        </Menu.Item>
        ;
        <Menu.Item>
          <Icon color="red" size="large" name="gratipay" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="coffee" color="yellow" size="large" />
        </Menu.Item>
      </Menu>
    );
  }
}
