import React from "react";
import {
  Hero,
  HeroBody,
  Container,
  Columns,
  Column,
  Title,
  Subtitle
} from "bloomer";

const HeroComponent = () => {
  return (
    <div>
      <Hero isColor="primary">
        <HeroBody>
          <Container>
            <Columns isVCentered="true">
              <Column>
                <Title>Quiz Testing</Title>
                <Subtitle>Unnecessary Knowledge</Subtitle>
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      </Hero>
    </div>
  );
};

export default HeroComponent;
