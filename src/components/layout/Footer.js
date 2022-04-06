import React from "react";
import { Footer, Container, Columns, Column, Content } from "bloomer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterComponent = () => {
  return (
    <Footer id="footer">
      <Container>
        <Content>
          <Columns>
            <Column isFull>
              <p>
                Made with <FontAwesomeIcon icon="heart" color="red" /> by{" "}
                <a>Noob</a>
              </p>
            </Column>
          </Columns>
          <Content isSize="small">
            <p>
              The source code is licensed under <a target="_blank">MIT</a>.
            </p>
          </Content>
        </Content>
      </Container>
    </Footer>
  );
};

export default FooterComponent;
