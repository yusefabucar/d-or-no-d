import React from "react";
import {
  Card,
  CardImage,
  CardContent,
  Image,
  Media,
  MediaContent,
  Title
} from "bloomer";

const cardText = "Enter Quiz";
const CardComponent = ({ launchModal }) => {
  return (
    <Card onClick={launchModal}>
      <CardImage>
        <Image
          isRatio="4:3"
          src="https://images.unsplash.com/photo-1534761166353-857a5a4b5c8c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=222e0dc49e00edaeb114174b4b9d0795&auto=format&fit=crop&w=2134&q=80"
        />
      </CardImage>
      <CardContent>
        <Media>
          <MediaContent>
            <Title isSize={4} hasTextAlign="centered">
              {cardText}
            </Title>
          </MediaContent>
        </Media>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
