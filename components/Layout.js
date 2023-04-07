import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import Footer from "./Footer";
import HeadElement from "./HeadElement";
//
export default (props) => {
  return (
    <Container>
      <HeadElement />
      <Header />
      {props.children}
      <div style={{ position: "fixed", bottom: "15px",width:"inherit" }}>
        <Footer />
      </div>
    </Container>
  );
};
