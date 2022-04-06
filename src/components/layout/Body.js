import React, { Component } from "react";
import { Section, Container, Columns, Column, Notification } from "bloomer";
import Card from "./Card";
import Modal from "./Modal";

class Body extends Component {
  state = {
    isActive: false
  };
  launchModal = () => this.setState({ isActive: !this.state.isActive });
  render() {
    return (
      <body>
        <Section>
          <Container>
            <Modal
              isActive={this.state.isActive}
              launchModal={this.launchModal}
            />
            <Columns isCentered>
              <Column>
                <Card launchModal={this.launchModal} />
              </Column>
              <Column>
                <Card />
                <Notification isColor="warning" hasTextAlign="centered">
                  quiz 2
                </Notification>
              </Column>
              <Column>
                <Card />
                <Notification isColor="danger" hasTextAlign="centered">
                  quiz 3
                </Notification>
              </Column>
            </Columns>
          </Container>
        </Section>
      </body>
    );
  }
}

export default Body;
