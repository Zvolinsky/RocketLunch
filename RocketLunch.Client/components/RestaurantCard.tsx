import { Card } from "react-native-paper";
import React from "react";

const RestaurantCard = ({ content }: any) => {
  return (
    <Card onPress={() => {}}>
      <Card.Cover source={content.image} />
      <Card.Title title={content.name} subtitle="Card Subtitle" />
    </Card>
  );
};

export default RestaurantCard;
