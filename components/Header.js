import React from "react";

import { Icon, Menu } from "semantic-ui-react";
import { Link } from "./../routes";
export default () => {
  return (
    <Menu style={{ marginTop: "10px" }} stackable>
      <Link route="/">
        <a
          className="item"
          style={{
            fontSize: "20px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          <Icon name="ethereum" />
          BlockFunds
        </a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a
            className="item"
            style={{
              fontSize: "20px",
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            <Icon name="podcast" />
            Campaigns
          </a>
        </Link>
        <Link route="/campaigns/new">
          <a className="item">
            <Icon circular="true" name="add square" />
          </a>
        </Link>
      </Menu.Menu>
      ;
    </Menu>
  );
};
