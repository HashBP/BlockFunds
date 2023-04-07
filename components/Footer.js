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
          <a href="https://www.linkedin.com/in/harsh-vardhan-971090207/">
            <Icon size="large" name="linkedin" color="blue" />
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="https://github.com/HashBP">
            <Icon size="large" name="git" color="pink" />
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="https://www.youtube.com/channel/UC7YyX01C2qtBbDB52UGQJ6Q">
            <Icon size="large" name="youtube" color="red" />
          </a>
        </Menu.Item>
        ;
        <Menu.Item>
          <a href="https://gratipay.com/">
            <Icon color="red" size="large" name="gratipay" />
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="https://www.buymeacoffee.com/hvptenuE">
            <Icon name="coffee" color="yellow" size="large" />
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
