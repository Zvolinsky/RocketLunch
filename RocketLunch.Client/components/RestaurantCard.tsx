import { Card } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ content }: any) => {
  const navigation = useNavigation();
  return (
    <Card onPress={() => navigation.navigate("Catering", content)}>
      <Card.Cover source={content.image} />
      <Card.Title
        style={{ padding: 20 }}
        title={content.name}
        titleStyle={{ fontSize: 22 }}
        subtitle={content.description}
      />
    </Card>
  );
};

export default RestaurantCard;
